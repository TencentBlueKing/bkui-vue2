#!/usr/bin/env node

import 'dotenv/config';

/**
 * 完整的 Agent 演示：使用 BKUI 文档 MCP Server
 * 
 * 这个演示展示了如何创建一个 AI Agent，它可以：
 * 1. 查询 BKUI Vue2 组件库的文档
 * 2. 回答关于组件使用的问题
 * 3. 提供代码示例和最佳实践
 */

import { MCPClient } from "@mastra/mcp";
import { Agent } from "@mastra/core/agent";
import { createOpenAI } from "@ai-sdk/openai";
import path from "path";

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL || "https://api.openai.com/v1",
});

async function agentDemo() {
  console.log("🤖 BKUI Documentation AI Agent Demo\n");

  // 创建 MCP 客户端
  const mcp = new MCPClient({
    servers: {
      bkuiDocs: {
        command: "npx",
        args: ["tsx", "src/stdio.ts"],
        cwd: process.cwd(),
        env: {
          BKUI_COMPONENTS_PATH: path.resolve(process.cwd(), '../example/components')
        }
      }
    }
  });

  try {
    console.log("📡 Connecting to BKUI Documentation MCP Server...");
    
    // 获取工具
    const tools = await mcp.getTools();
    console.log(`✅ Connected! Available tools: ${Object.keys(tools).length}\n`);

    // 创建 AI Agent
    const agent = new Agent({
      name: "BKUI Documentation Assistant",
      instructions: `
你是一个专业的 BKUI Vue2 组件库文档助手。你的任务是帮助开发者：

1. **查找组件**: 帮助用户找到合适的组件来实现特定功能
2. **组件使用**: 提供详细的组件使用方法、属性说明和最佳实践
3. **代码示例**: 给出具体的代码示例和实现方案
4. **问题解答**: 回答关于组件的技术问题

你有以下工具可以使用：
- componentList: 获取所有组件列表
- componentSearch: 搜索特定组件
- componentGuide: 获取组件详细文档
- componentExamples: 获取组件示例代码
- componentProps: 获取组件属性信息

请用中文回答，提供准确、实用的信息。当提供代码示例时，请确保代码格式正确且易于理解。
      `,
      model: openai("Qwen/Qwen3-32B"),
      tools
    });

    // 演示对话
    const queries = [
      "请列出所有可用的组件，我想了解这个组件库有什么功能",
      "我需要一个按钮组件，请告诉我怎么使用",
      "button 组件有哪些属性？我想要一个主要样式的按钮",
      "搜索一下表格相关的组件",
      "我想要一个输入框组件，请给我详细的使用方法和示例"
    ];

    for (let i = 0; i < queries.length; i++) {
      const query = queries[i];
      console.log(`\n${'='.repeat(80)}`);
      console.log(`💬 用户问题 ${i + 1}: ${query}`);
      console.log(`${'='.repeat(80)}`);
      console.log("🤖 AI 助手回答:");
      
      try {
        const response = await agent.generate(query);
        console.log(response.text);
      } catch (error) {
        console.error(`❌ 错误: ${error}`);
      }
      
      // 添加延迟，避免请求过快
      if (i < queries.length - 1) {
        console.log("\n⏳ 等待 2 秒...");
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }

    console.log(`\n${'='.repeat(80)}`);
    console.log("✅ 演示完成！");
    console.log(`${'='.repeat(80)}`);

  } catch (error) {
    console.error("❌ 演示失败:", error);
  } finally {
    // 断开连接
    await mcp.disconnect();
    console.log("\n👋 已断开与 MCP 服务器的连接");
  }
}

// 检查是否提供了 OpenAI API Key
if (!process.env.OPENAI_API_KEY) {
  console.error("❌ 请设置 OPENAI_API_KEY 环境变量");
  console.log("💡 使用方法: OPENAI_API_KEY=your_key npx tsx examples/agent-demo.ts");
  process.exit(1);
}

// 运行演示
agentDemo().catch(console.error);
