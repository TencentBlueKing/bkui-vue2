# BKUI Vue2 Documentation MCP Server 使用指南

## 快速开始

### 1. 安装

```bash
cd doc-mcp-server
npm install
```

### 2. 测试功能

```bash
# 测试解析器和工具
npx tsx src/simple-test.ts

# 完整功能测试
npx tsx src/final-test.ts
```

### 3. 启动服务器

#### HTTP 模式（用于测试）
```bash
# 启动 HTTP 服务器
npx tsx src/start-server.ts
```

访问 `http://localhost:3000/mcp` 查看服务器状态。

#### Stdio 模式（用于 MCP 客户端）
```bash
npx tsx src/stdio.ts
```

### 4. 完整演示

```bash
# 需要设置 OpenAI API Key
OPENAI_API_KEY=your_key npx tsx examples/agent-demo.ts
```

## MCP 客户端配置

### 使用 Mastra MCPClient

```typescript
import { MCPClient } from "@mastra/mcp";

const mcp = new MCPClient({
  servers: {
    bkuiDocs: {
      command: "npm",
      args: ["run", "stdio"],
      cwd: "/path/to/doc-mcp-server",
      env: {
        BKUI_COMPONENTS_PATH: "/path/to/bkui-vue2/example/components"
      }
    }
  }
});

// 获取工具
const tools = await mcp.getTools();
```

### 使用 Agent

```typescript
import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";

const agent = new Agent({
  name: "BKUI Assistant",
  instructions: "你是 BKUI Vue2 组件库的文档助手...",
  model: openai("gpt-4o-mini"),
  tools
});

const response = await agent.generate("请列出所有可用的组件");
```

## 可用工具

### 1. component-list
获取所有组件列表

**输入参数：**
- `includeDescription` (boolean, 可选): 是否包含描述，默认 true

**输出：**
- `components`: 组件数组
- `total`: 组件总数

### 2. component-guide
获取组件详细文档

**输入参数：**
- `componentName` (string): 组件名称
- `sections` (array, 可选): 要获取的部分 ["properties", "events", "methods", "examples", "all"]

**输出：**
- `component`: 组件基本信息
- `properties`: 属性列表
- `events`: 事件列表
- `methods`: 方法列表
- `examples`: 示例代码
- `fullContent`: 完整 markdown 内容

### 3. component-search
搜索组件

**输入参数：**
- `query` (string): 搜索关键词
- `limit` (number, 可选): 结果数量限制，默认 10

**输出：**
- `results`: 匹配的组件列表
- `total`: 匹配总数
- `query`: 搜索关键词

### 4. component-examples
获取组件示例

**输入参数：**
- `componentName` (string): 组件名称
- `language` (string, 可选): 代码语言过滤

**输出：**
- `componentName`: 组件名称
- `examples`: 示例列表
- `total`: 示例总数

### 5. component-props
获取组件属性

**输入参数：**
- `componentName` (string): 组件名称
- `propertyName` (string, 可选): 特定属性名称

**输出：**
- `componentName`: 组件名称
- `properties`: 属性列表
- `total`: 属性总数

## Docker 部署

### 构建镜像

```bash
cd doc-mcp-server
docker build -f docker/Dockerfile -t bkui-doc-server .
```

### 使用 Docker Compose

```bash
cd doc-mcp-server/docker
docker-compose up -d
```

## 故障排除

### 1. 组件路径错误
确保 `BKUI_COMPONENTS_PATH` 指向正确的组件目录，该目录应包含各个组件的子目录。

### 2. 权限问题
确保脚本有执行权限：
```bash
chmod +x scripts/*.sh
```

### 3. 端口占用
如果端口 3000 被占用，修改 `.env` 文件中的 `PORT` 设置。

### 4. Node.js 版本
确保使用 Node.js 18 或更高版本。

## 开发

### 项目结构
```
doc-mcp-server/
├── src/
│   ├── types.ts          # 类型定义
│   ├── parser.ts         # 文档解析器
│   ├── tools.ts          # MCP 工具定义
│   ├── server.ts         # MCP 服务器
│   ├── index.ts          # 主入口
│   ├── stdio.ts          # Stdio 入口
│   └── test.ts           # 测试文件
├── examples/             # 使用示例
├── scripts/              # 部署脚本
└── docker/               # Docker 配置
```

### 添加新工具
1. 在 `src/tools.ts` 中添加新的工具方法
2. 在 `BKUIDocTools.getAllTools()` 中注册新工具
3. 更新类型定义和文档

### 扩展解析器
在 `src/parser.ts` 中添加新的解析方法，支持更多文档格式或提取更多信息。
