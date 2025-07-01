/**
 * 直接使用 BKUI 文档解析器的示例（不通过 MCP）
 */

import { ComponentDocumentationParser } from "../src/parser.js";
import path from "path";

async function main() {
  console.log("📚 Direct Usage Example for BKUI Documentation Parser\n");

  // 创建解析器实例
  const componentsPath = path.resolve(process.cwd(), '../example/components');
  const parser = new ComponentDocumentationParser(componentsPath);

  try {
    // 1. 获取组件列表
    console.log("1. 📋 Getting component list...");
    const components = await parser.getComponentList();
    console.log(`   Found ${components.length} components:`);
    components.slice(0, 5).forEach(comp => {
      console.log(`   - ${comp.name} (${comp.displayName}): ${comp.description.substring(0, 60)}...`);
    });
    console.log();

    // 2. 搜索组件
    console.log("2. 🔍 Searching for 'button' components...");
    const searchResults = await parser.searchComponents("button");
    console.log(`   Found ${searchResults.length} matching components:`);
    searchResults.forEach(comp => {
      console.log(`   - ${comp.name}: ${comp.description.substring(0, 60)}...`);
    });
    console.log();

    // 3. 获取特定组件的文档
    console.log("3. 📖 Getting documentation for 'button' component...");
    const buttonDoc = await parser.getComponentDocumentation("button");
    if (buttonDoc) {
      console.log(`   Component: ${buttonDoc.info.displayName}`);
      console.log(`   Description: ${buttonDoc.info.description}`);
      console.log(`   Properties: ${buttonDoc.properties.length}`);
      console.log(`   Events: ${buttonDoc.events.length}`);
      console.log(`   Methods: ${buttonDoc.methods.length}`);
      console.log(`   Examples: ${buttonDoc.examples.length}`);
      
      // 显示前几个属性
      if (buttonDoc.properties.length > 0) {
        console.log("\n   📝 Properties (first 3):");
        buttonDoc.properties.slice(0, 3).forEach(prop => {
          console.log(`      - ${prop.name}: ${prop.type} ${prop.required ? '(required)' : '(optional)'}`);
          console.log(`        ${prop.description}`);
        });
      }

      // 显示示例
      if (buttonDoc.examples.length > 0) {
        console.log("\n   💡 Examples:");
        buttonDoc.examples.forEach((example, index) => {
          console.log(`      ${index + 1}. ${example.title} (${example.language})`);
          if (example.description) {
            console.log(`         ${example.description}`);
          }
        });
      }
    }
    console.log();

    // 4. 获取组件属性
    console.log("4. ⚙️ Getting properties for 'input' component...");
    const inputProps = await parser.getComponentProperties("input");
    console.log(`   Found ${inputProps.length} properties:`);
    inputProps.slice(0, 5).forEach(prop => {
      console.log(`   - ${prop.name}: ${prop.type}`);
      console.log(`     ${prop.description}`);
      if (prop.defaultValue) {
        console.log(`     Default: ${prop.defaultValue}`);
      }
    });
    console.log();

    // 5. 获取组件示例
    console.log("5. 💻 Getting examples for 'table' component...");
    const tableExamples = await parser.getComponentExamples("table");
    console.log(`   Found ${tableExamples.length} examples:`);
    tableExamples.forEach((example, index) => {
      console.log(`   ${index + 1}. ${example.title} (${example.language})`);
      console.log(`      Code length: ${example.code.length} characters`);
    });

    console.log("\n✅ Direct usage example completed!");

  } catch (error) {
    console.error("❌ Error:", error);
  }
}

// 运行示例
main().catch(console.error);
