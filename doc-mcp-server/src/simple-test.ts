#!/usr/bin/env node

import { ComponentDocumentationParser } from "./parser.js";
import { BKUIDocTools } from "./tools.js";
import path from "path";

async function simpleTest() {
  console.log("🧪 Simple Test for BKUI Documentation Parser...\n");

  // 使用测试路径
  const componentsPath = path.resolve(process.cwd(), '../example/components');
  console.log(`Components path: ${componentsPath}`);

  // 检查路径是否存在
  const fs = await import('fs-extra');
  const pathExists = await fs.pathExists(componentsPath);
  console.log(`Path exists: ${pathExists}\n`);

  try {
    // 测试解析器
    console.log("1. 📋 Testing ComponentDocumentationParser...");
    const parser = new ComponentDocumentationParser(componentsPath);
    
    // 获取组件列表
    const components = await parser.getComponentList();
    console.log(`   ✅ Found ${components.length} components`);
    
    if (components.length > 0) {
      console.log(`   📝 First 3 components:`);
      components.slice(0, 3).forEach(comp => {
        console.log(`      - ${comp.name} (${comp.displayName})`);
      });
    }
    console.log();

    // 测试搜索
    console.log("2. 🔍 Testing search...");
    const searchResults = await parser.searchComponents("button");
    console.log(`   ✅ Found ${searchResults.length} components matching "button"`);
    searchResults.forEach(comp => {
      console.log(`      - ${comp.name}: ${comp.description.substring(0, 50)}...`);
    });
    console.log();

    // 测试获取特定组件文档
    if (searchResults.length > 0) {
      const componentName = searchResults[0].name;
      console.log(`3. 📖 Testing documentation for "${componentName}"...`);
      const doc = await parser.getComponentDocumentation(componentName);
      
      if (doc) {
        console.log(`   ✅ Retrieved documentation for ${doc.info.displayName}`);
        console.log(`   📋 Properties: ${doc.properties.length}`);
        console.log(`   🎯 Events: ${doc.events.length}`);
        console.log(`   🔧 Methods: ${doc.methods.length}`);
        console.log(`   💡 Examples: ${doc.examples.length}`);
      } else {
        console.log(`   ❌ No documentation found for ${componentName}`);
      }
    }
    console.log();

    // 测试工具
    console.log("4. 🛠️ Testing BKUIDocTools...");
    const tools = new BKUIDocTools(componentsPath);
    const allTools = tools.getAllTools();
    
    console.log(`   ✅ Created ${Object.keys(allTools).length} tools:`);
    Object.keys(allTools).forEach(toolName => {
      console.log(`      - ${toolName}`);
    });
    console.log();

    // 测试工具执行
    console.log("5. 🚀 Testing tool execution...");
    try {
      const listTool = tools.getComponentListTool();
      const result = await listTool.execute({
        context: { includeDescription: true },
        runtimeContext: {} as any
      });
      console.log(`   ✅ component-list tool returned ${result.total} components`);
    } catch (error) {
      console.log(`   ❌ Tool execution error: ${error}`);
    }

    console.log("\n✅ Simple test completed successfully!");

  } catch (error) {
    console.error("❌ Test failed:", error);
    process.exit(1);
  }
}

// 运行测试
simpleTest().catch(console.error);
