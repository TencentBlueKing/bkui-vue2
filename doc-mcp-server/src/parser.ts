import fs from 'fs-extra';
import path from 'path';
import MarkdownIt from 'markdown-it';
import { glob } from 'glob';
import type { 
  ComponentInfo, 
  ComponentProperty, 
  ComponentEvent, 
  ComponentMethod, 
  ComponentExample, 
  ComponentDocumentation 
} from './types.js';

export class ComponentDocumentationParser {
  private md: MarkdownIt;
  private componentsPath: string;

  constructor(componentsPath: string) {
    this.componentsPath = componentsPath;
    this.md = new MarkdownIt();
  }

  /**
   * 获取所有组件列表
   */
  async getComponentList(): Promise<ComponentInfo[]> {
    const componentDirs = await glob('*/', { cwd: this.componentsPath });
    const components: ComponentInfo[] = [];

    for (const dir of componentDirs) {
      const componentName = dir.replace('/', '');
      const componentPath = path.join(this.componentsPath, dir);
      const readmePath = path.join(componentPath, 'readme.md');
      const examplePath = path.join(componentPath, 'example.vue');

      if (await fs.pathExists(readmePath)) {
        const content = await fs.readFile(readmePath, 'utf-8');
        const description = this.extractDescription(content);
        
        components.push({
          name: componentName,
          displayName: this.formatDisplayName(componentName),
          description,
          path: componentPath,
          hasExample: await fs.pathExists(examplePath)
        });
      }
    }

    return components.sort((a, b) => a.name.localeCompare(b.name));
  }

  /**
   * 获取特定组件的完整文档
   */
  async getComponentDocumentation(componentName: string): Promise<ComponentDocumentation | null> {
    const componentPath = path.join(this.componentsPath, componentName);
    const readmePath = path.join(componentPath, 'readme.md');
    const examplePath = path.join(componentPath, 'example.vue');

    if (!await fs.pathExists(readmePath)) {
      return null;
    }

    const content = await fs.readFile(readmePath, 'utf-8');
    
    const info: ComponentInfo = {
      name: componentName,
      displayName: this.formatDisplayName(componentName),
      description: this.extractDescription(content),
      path: componentPath,
      hasExample: await fs.pathExists(examplePath)
    };

    return {
      info,
      properties: this.extractProperties(content),
      events: this.extractEvents(content),
      methods: this.extractMethods(content),
      examples: this.extractExamples(content),
      fullContent: content
    };
  }

  /**
   * 搜索组件
   */
  async searchComponents(query: string): Promise<ComponentInfo[]> {
    const allComponents = await this.getComponentList();
    const queryLower = query.toLowerCase();

    return allComponents.filter(component => {
      return (
        component.name.toLowerCase().includes(queryLower) ||
        component.displayName.toLowerCase().includes(queryLower) ||
        component.description.toLowerCase().includes(queryLower)
      );
    });
  }

  /**
   * 获取组件示例代码
   */
  async getComponentExamples(componentName: string): Promise<ComponentExample[]> {
    const doc = await this.getComponentDocumentation(componentName);
    return doc?.examples || [];
  }

  /**
   * 获取组件属性
   */
  async getComponentProperties(componentName: string): Promise<ComponentProperty[]> {
    const doc = await this.getComponentDocumentation(componentName);
    return doc?.properties || [];
  }

  /**
   * 获取组件事件
   */
  async getComponentEvents(componentName: string): Promise<ComponentEvent[]> {
    const doc = await this.getComponentDocumentation(componentName);
    return doc?.events || [];
  }

  /**
   * 获取组件方法
   */
  async getComponentMethods(componentName: string): Promise<ComponentMethod[]> {
    const doc = await this.getComponentDocumentation(componentName);
    return doc?.methods || [];
  }

  /**
   * 提取组件描述
   */
  private extractDescription(content: string): string {
    // 查找第一个 ## 标题后的内容作为描述
    const match = content.match(/##\s+([^#\n]+)\s*\n([^\n]+)/);
    if (match) {
      return match[2].trim();
    }
    
    // 如果没有找到，尝试查找第一段文字
    const lines = content.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('<') && !trimmed.startsWith(':::')) {
        return trimmed;
      }
    }
    
    return '暂无描述';
  }

  /**
   * 提取属性信息
   */
  private extractProperties(content: string): ComponentProperty[] {
    const properties: ComponentProperty[] = [];

    // 查找属性表格 - 修复正则表达式以匹配 {page=#/button} 格式
    const tableMatch = content.match(/###\s*属性[^\n]*\n([\s\S]*?)(?=\n###|\n##|$)/);
    if (!tableMatch) return properties;

    const tableContent = tableMatch[1];
    const rows = tableContent.split('\n').filter(line => line.includes('|') && line.trim() !== '');

    // 跳过表头和分隔符
    for (let i = 2; i < rows.length; i++) {
      const row = rows[i];
      const cells = row.split('|').map(cell => cell.trim()).filter(cell => cell !== '');

      if (cells.length >= 5) {
        const defaultValue = cells[4];
        properties.push({
          name: cells[0],
          description: cells[1],
          type: cells[2],
          required: defaultValue === '——' || !defaultValue,
          defaultValue: defaultValue === '——' ? undefined : defaultValue,
          options: cells[3].includes('【') ?
            cells[3].match(/【([^】]+)】/)?.[1]?.split(' ') : undefined
        });
      }
    }

    return properties;
  }

  /**
   * 提取事件信息
   */
  private extractEvents(content: string): ComponentEvent[] {
    const events: ComponentEvent[] = [];

    const tableMatch = content.match(/###\s*事件[^\n]*\n([\s\S]*?)(?=\n###|\n##|$)/);
    if (!tableMatch) return events;

    const tableContent = tableMatch[1];
    const rows = tableContent.split('\n').filter(line => line.includes('|') && line.trim() !== '');

    for (let i = 2; i < rows.length; i++) {
      const row = rows[i];
      const cells = row.split('|').map(cell => cell.trim()).filter(cell => cell !== '');

      if (cells.length >= 2) {
        events.push({
          name: cells[0],
          description: cells[1],
          parameters: cells[2] || undefined
        });
      }
    }

    return events;
  }

  /**
   * 提取方法信息
   */
  private extractMethods(content: string): ComponentMethod[] {
    const methods: ComponentMethod[] = [];

    const tableMatch = content.match(/###\s*方法[^\n]*\n([\s\S]*?)(?=\n###|\n##|$)/);
    if (!tableMatch) return methods;

    const tableContent = tableMatch[1];
    const rows = tableContent.split('\n').filter(line => line.includes('|'));
    
    for (let i = 2; i < rows.length; i++) {
      const row = rows[i];
      const cells = row.split('|').map(cell => cell.trim()).filter(cell => cell);
      
      if (cells.length >= 2) {
        methods.push({
          name: cells[0],
          description: cells[1],
          parameters: cells[2] || undefined,
          returns: cells[3] || undefined
        });
      }
    }

    return methods;
  }

  /**
   * 提取示例代码
   */
  private extractExamples(content: string): ComponentExample[] {
    const examples: ComponentExample[] = [];
    
    // 查找所有 :::demo 块
    const demoRegex = /:::demo\s*(.*?)\n([\s\S]*?):::/g;
    let match;
    
    while ((match = demoRegex.exec(content)) !== null) {
      const description = match[1].trim();
      const demoContent = match[2];
      
      // 提取代码块
      const codeMatch = demoContent.match(/```(\w+)\n([\s\S]*?)```/);
      if (codeMatch) {
        examples.push({
          title: description || '示例',
          description,
          code: codeMatch[2].trim(),
          language: codeMatch[1]
        });
      }
    }

    return examples;
  }

  /**
   * 格式化显示名称
   */
  private formatDisplayName(componentName: string): string {
    // 将 kebab-case 转换为更友好的显示名称
    return componentName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
