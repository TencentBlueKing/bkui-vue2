import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import { ComponentDocumentationParser } from "./parser.js";
import type { ComponentInfo, ComponentDocumentation } from "./types.js";

export class BKUIDocTools {
  private parser: ComponentDocumentationParser;

  constructor(componentsPath: string) {
    this.parser = new ComponentDocumentationParser(componentsPath);
  }

  /**
   * 获取所有组件列表的工具
   */
  getComponentListTool() {
    return createTool({
      id: "component-list",
      description: "获取 BKUI Vue2 组件库中所有可用组件的列表，包括组件名称、显示名称和简要描述",
      inputSchema: z.object({
        includeDescription: z.boolean().optional().describe("是否包含组件描述信息，默认为 true")
      }),
      outputSchema: z.object({
        components: z.array(z.object({
          name: z.string().describe("组件名称（kebab-case）"),
          displayName: z.string().describe("组件显示名称"),
          description: z.string().describe("组件描述"),
          hasExample: z.boolean().describe("是否有示例文件")
        })),
        total: z.number().describe("组件总数")
      }),
      execute: async ({ context }) => {
        const components = await this.parser.getComponentList();
        
        return {
          components: context.includeDescription !== false ? components : components.map(c => ({
            name: c.name,
            displayName: c.displayName,
            description: c.description,
            hasExample: c.hasExample
          })),
          total: components.length
        };
      }
    });
  }

  /**
   * 获取组件详细文档的工具
   */
  getComponentGuideTool() {
    return createTool({
      id: "component-guide",
      description: "获取指定 BKUI Vue2 组件的完整文档，包括属性、事件、方法和使用示例",
      inputSchema: z.object({
        componentName: z.string().describe("组件名称（如：button, input, table 等）"),
        sections: z.array(z.enum(["properties", "events", "methods", "examples", "all"]))
          .optional()
          .describe("要获取的文档部分，默认为 all")
      }),
      outputSchema: z.object({
        component: z.object({
          name: z.string(),
          displayName: z.string(),
          description: z.string(),
          hasExample: z.boolean()
        }),
        properties: z.array(z.object({
          name: z.string(),
          description: z.string(),
          type: z.string(),
          required: z.boolean(),
          defaultValue: z.string().optional(),
          options: z.array(z.string()).optional()
        })).optional(),
        events: z.array(z.object({
          name: z.string(),
          description: z.string(),
          parameters: z.string().optional()
        })).optional(),
        methods: z.array(z.object({
          name: z.string(),
          description: z.string(),
          parameters: z.string().optional(),
          returns: z.string().optional()
        })).optional(),
        examples: z.array(z.object({
          title: z.string(),
          description: z.string().optional(),
          code: z.string(),
          language: z.string()
        })).optional(),
        fullContent: z.string().optional().describe("完整的 markdown 内容")
      }),
      execute: async ({ context }) => {
        const doc = await this.parser.getComponentDocumentation(context.componentName);
        
        if (!doc) {
          throw new Error(`组件 "${context.componentName}" 不存在或没有文档`);
        }

        const sections = context.sections || ["all"];
        const includeAll = sections.includes("all");

        const result: any = {
          component: doc.info
        };

        if (includeAll || sections.includes("properties")) {
          result.properties = doc.properties;
        }
        if (includeAll || sections.includes("events")) {
          result.events = doc.events;
        }
        if (includeAll || sections.includes("methods")) {
          result.methods = doc.methods;
        }
        if (includeAll || sections.includes("examples")) {
          result.examples = doc.examples;
        }
        if (includeAll) {
          result.fullContent = doc.fullContent;
        }

        return result;
      }
    });
  }

  /**
   * 搜索组件的工具
   */
  getComponentSearchTool() {
    return createTool({
      id: "component-search",
      description: "根据关键词搜索 BKUI Vue2 组件，支持按组件名称、显示名称和描述搜索",
      inputSchema: z.object({
        query: z.string().describe("搜索关键词"),
        limit: z.number().optional().describe("返回结果数量限制，默认为 10")
      }),
      outputSchema: z.object({
        results: z.array(z.object({
          name: z.string(),
          displayName: z.string(),
          description: z.string(),
          hasExample: z.boolean()
        })),
        total: z.number().describe("匹配的组件总数"),
        query: z.string().describe("搜索关键词")
      }),
      execute: async ({ context }) => {
        const results = await this.parser.searchComponents(context.query);
        const limit = context.limit || 10;
        
        return {
          results: results.slice(0, limit),
          total: results.length,
          query: context.query
        };
      }
    });
  }

  /**
   * 获取组件示例的工具
   */
  getComponentExamplesTool() {
    return createTool({
      id: "component-examples",
      description: "获取指定 BKUI Vue2 组件的代码示例",
      inputSchema: z.object({
        componentName: z.string().describe("组件名称"),
        language: z.string().optional().describe("代码语言过滤（如：html, javascript）")
      }),
      outputSchema: z.object({
        componentName: z.string(),
        examples: z.array(z.object({
          title: z.string(),
          description: z.string().optional(),
          code: z.string(),
          language: z.string()
        })),
        total: z.number()
      }),
      execute: async ({ context }) => {
        const examples = await this.parser.getComponentExamples(context.componentName);
        
        const filteredExamples = context.language 
          ? examples.filter(ex => ex.language === context.language)
          : examples;

        return {
          componentName: context.componentName,
          examples: filteredExamples,
          total: filteredExamples.length
        };
      }
    });
  }

  /**
   * 获取组件属性的工具
   */
  getComponentPropsTool() {
    return createTool({
      id: "component-props",
      description: "获取指定 BKUI Vue2 组件的详细属性信息",
      inputSchema: z.object({
        componentName: z.string().describe("组件名称"),
        propertyName: z.string().optional().describe("特定属性名称，如果指定则只返回该属性")
      }),
      outputSchema: z.object({
        componentName: z.string(),
        properties: z.array(z.object({
          name: z.string(),
          description: z.string(),
          type: z.string(),
          required: z.boolean(),
          defaultValue: z.string().optional(),
          options: z.array(z.string()).optional()
        })),
        total: z.number()
      }),
      execute: async ({ context }) => {
        const properties = await this.parser.getComponentProperties(context.componentName);
        
        const filteredProperties = context.propertyName
          ? properties.filter(prop => prop.name === context.propertyName)
          : properties;

        return {
          componentName: context.componentName,
          properties: filteredProperties,
          total: filteredProperties.length
        };
      }
    });
  }

  /**
   * 获取所有工具
   */
  getAllTools() {
    return {
      componentList: this.getComponentListTool(),
      componentGuide: this.getComponentGuideTool(),
      componentSearch: this.getComponentSearchTool(),
      componentExamples: this.getComponentExamplesTool(),
      componentProps: this.getComponentPropsTool()
    };
  }
}
