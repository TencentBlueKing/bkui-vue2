#!/usr/bin/env node

import { createBKUIDocServer } from "./server.js";
import path from "path";

async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'sse';
  const port = parseInt(args[1]) || 3000;
  
  // 获取组件路径
  const componentsPath = process.env.BKUI_COMPONENTS_PATH || 
    path.resolve(process.cwd(), '../example/components');

  console.log(`Using components path: ${componentsPath}`);

  const server = createBKUIDocServer(componentsPath);

  // 处理进程退出
  process.on('SIGINT', async () => {
    console.log('\nShutting down server...');
    await server.close();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    console.log('\nShutting down server...');
    await server.close();
    process.exit(0);
  });

  try {
    switch (command) {
      case 'stdio':
        await server.startStdio();
        break;
      case 'sse':
        await server.startSSE(port);
        break;
      case 'http':
      default:
        await server.startHTTP(port);
        break;
    }
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

// 只有在直接运行此文件时才执行 main
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { createBKUIDocServer } from "./server.js";
export { BKUIDocTools } from "./tools.js";
export { ComponentDocumentationParser } from "./parser.js";
export * from "./types.js";
