import { MCPServer } from "@mastra/mcp";
import path from "path";
import { BKUIDocTools } from "./tools.js";

export class BKUIDocMCPServer {
  private server: MCPServer;
  private tools: BKUIDocTools;

  constructor(componentsPath: string) {
    this.tools = new BKUIDocTools(componentsPath);
    
    // 创建 MCP Server
    this.server = new MCPServer({
      name: "BKUI Vue2 Documentation Server",
      version: "1.0.0",
      tools: this.tools.getAllTools()
    });
  }

  /**
   * 启动 Stdio 服务器（用于 MCP 客户端连接）
   */
  async startStdio() {
    console.error("Starting BKUI Vue2 Documentation MCP Server via stdio...");
    await this.server.startStdio();
  }

  /**
   * 启动 SSE 服务器
   */
  async startSSE(port: number = 3000) {
    console.log(`Starting BKUI Vue2 Documentation MCP Server on port ${port}...`);
    const http = await import("http");
    const httpServer = http.createServer(async (req, res) => {
      const url = new URL(req.url || '', `http://localhost:${port}`);
      
      await this.server.startSSE({
        url,
        ssePath: '/sse',
        messagePath: '/message',
        req,
        res,
      });
    });

    httpServer.listen(port, () => {
      console.log(`BKUI Vue2 Documentation MCP Server running on http://localhost:${port}/sse`);
    });

    return httpServer;
  }

  /**
   * 启动 HTTP 服务器
   */
  async startHTTP(port: number = 3000) {
    const http = await import("http");
    
    const httpServer = http.createServer(async (req, res) => {
      const url = new URL(req.url || '', `http://localhost:${port}`);
      
      await this.server.startHTTP({
        url,
        httpPath: '/mcp',
        req,
        res,
        options: {
          sessionIdGenerator: () => Math.random().toString(36).substring(2, 15)
        }
      });
    });

    httpServer.listen(port, () => {
      console.log(`BKUI Vue2 Documentation MCP Server running on http://localhost:${port}/mcp`);
    });

    return httpServer;
  }

  /**
   * 关闭服务器
   */
  async close() {
    await this.server.close();
  }

  /**
   * 获取服务器信息
   */
  getServerInfo() {
    return this.server.getServerInfo();
  }

  /**
   * 获取工具列表信息
   */
  getToolListInfo() {
    return this.server.getToolListInfo();
  }

  /**
   * 获取服务器详细信息
   */
  getServerDetail() {
    return this.server.getServerDetail();
  }
}

/**
 * 创建默认的 BKUI 文档服务器实例
 */
export function createBKUIDocServer(componentsPath?: string) {
  // 默认组件路径为相对于当前工作目录的 example/components
  const defaultPath = path.resolve(process.cwd(), '../example/components');
  const actualPath = componentsPath || defaultPath;
  
  return new BKUIDocMCPServer(actualPath);
}
