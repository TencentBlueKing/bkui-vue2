# BKUI Vue2 Documentation MCP Server

这是一个基于 Mastra MCP (Model Context Protocol) 的服务器，为 BKUI Vue2 组件库提供文档查询功能。

## 功能特性

- **component-list**: 获取所有可用组件列表
- **component-guide**: 获取特定组件的详细文档
- **component-search**: 根据关键词搜索组件
- **component-examples**: 获取组件的示例代码
- **component-props**: 获取组件的属性信息

## 安装

```bash
npm install
```

## 使用方法

### 开发模式

```bash
npm run dev
```

### 构建

```bash
npm run build
```

### 启动服务器

```bash
npm start
```

### Stdio 模式（用于 MCP 客户端）

```bash
npm run stdio
```

## MCP 客户端配置

在你的 MCP 客户端中，可以这样配置：

```typescript
import { MCPClient } from "@mastra/mcp";

const mcp = new MCPClient({
  servers: {
    bkuiDocs: {
      command: "npm",
      args: ["run", "stdio"],
      cwd: "/path/to/doc-mcp-server"
    }
  }
});
```

## 工具说明

### component-list
获取所有可用的组件列表，包括组件名称和简要描述。

### component-guide
获取指定组件的完整文档，包括：
- 组件描述
- 使用示例
- 属性说明
- 事件说明
- 方法说明

### component-search
根据关键词搜索相关组件。

### component-examples
获取组件的代码示例。

### component-props
获取组件的详细属性信息。

## 许可证

MIT
