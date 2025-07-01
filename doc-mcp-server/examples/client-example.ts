/**
 * 使用 Mastra MCPClient 连接到 BKUI 文档服务器的示例
 */

import { MCPClient } from "@mastra/mcp";
import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";

async function main() {
  console.log("🚀 Starting BKUI Documentation MCP Client Example...\n");

  // 创建 MCP 客户端
  const mcp = new MCPClient({
    servers: {
      bkuiDocs: {
        command: "npm",
        args: ["run", "stdio"],
        cwd: process.cwd(), // 当前目录应该是 doc-mcp-server
        env: {
          BKUI_COMPONENTS_PATH: "../example/components"
        }
      }
    }
  });

  try {
    // 连接到服务器
    console.log("📡 Connecting to BKUI Documentation MCP Server...");
    
    // 获取工具
    const tools = await mcp.getTools();
    console.log(`✅ Connected! Available tools: ${Object.keys(tools).join(', ')}\n`);

    // 创建一个 Agent 来使用这些工具
    const agent = new Agent({
      name: "BKUI Documentation Assistant",
      instructions: `
        你是一个 BKUI Vue2 组件库的文档助手。你可以帮助用户：
        1. 查找组件列表
        2. 获取组件的详细文档
        3. 搜索特定的组件
        4. 查看组件的使用示例
        5. 了解组件的属性和事件
        
        请用中文回答用户的问题，并提供准确、有用的信息。
      `,
      model: openai("gpt-4o-mini"),
      tools
    });

    // 示例对话
    const queries = [
      "请列出所有可用的组件",
      "我想了解 button 组件的详细信息",
      "搜索与表格相关的组件",
      "给我看看 input 组件的使用示例",
      "button 组件有哪些属性？"
    ];

    for (const query of queries) {
      console.log(`❓ 用户问题: ${query}`);
      console.log("🤖 AI 回答:");
      
      try {
        const response = await agent.generate(query);
        console.log(response.text);
        console.log("\n" + "=".repeat(80) + "\n");
      } catch (error) {
        console.error(`❌ 错误: ${error}`);
        console.log("\n" + "=".repeat(80) + "\n");
      }
    }

  } catch (error) {
    console.error("❌ 连接失败:", error);
  } finally {
    // 断开连接
    await mcp.disconnect();
    console.log("👋 已断开连接");
  }
}

// 运行示例
main().catch(console.error);
