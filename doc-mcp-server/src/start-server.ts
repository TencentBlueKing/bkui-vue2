#!/usr/bin/env node

import { createBKUIDocServer } from "./server.js";
import path from "path";

async function startServer() {
  console.log("🚀 Starting BKUI Documentation MCP Server...\n");

  // 获取组件路径
  const componentsPath = path.resolve(process.cwd(), '../example/components');
  console.log(`Components path: ${componentsPath}`);

  const server = createBKUIDocServer(componentsPath);

  // 处理进程退出
  process.on('SIGINT', async () => {
    console.log('\nShutting down server...');
    await server.close();
    process.exit(0);
  });

  try {
    // 启动 HTTP 服务器
    await server.startHTTP(3000);
    console.log("✅ Server started successfully!");
    console.log("📋 Available endpoints:");
    console.log("  - HTTP: http://localhost:3000/mcp");
    console.log("  - Health check: curl http://localhost:3000/mcp");
    
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

startServer().catch(console.error);
