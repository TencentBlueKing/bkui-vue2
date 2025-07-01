#!/usr/bin/env node

import { createBKUIDocServer } from "./server.js";
import path from "path";

async function main() {
  // 获取组件路径
  const componentsPath = process.env.BKUI_COMPONENTS_PATH || 
    path.resolve(process.cwd(), '../example/components');

  const server = createBKUIDocServer(componentsPath);

  // 启动 stdio 服务器
  await server.startStdio();
}

main().catch((error) => {
  console.error('Failed to start stdio server:', error);
  process.exit(1);
});
