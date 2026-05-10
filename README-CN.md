# Komari-Next

Komari-Next 是 Komari 监控项目的现代化前端。  
它基于 **Next.js**、**TypeScript**、**Tailwind CSS** 和 **Shadcn UI** 构建，并打包为可作为 Komari 主题使用的静态站点。

[English](https://github.com/tonyliuzj/komari-next/blob/main/README.md)

[演示站点](https://probes.top)

[下载主题文件](https://github.com/tonyliuzj/komari-next/releases/latest/download/dist-release.zip)

> 本仓库仅包含前端部分。你需要一个正在运行的 Komari 后端实例供该 UI 调用。或者，你也可以下载主题文件，并通过 Komari 管理后台上传；这是推荐的使用方式。

![预览](https://github.com/tonyliuzj/komari-next/blob/main/preview.png?raw=true)
![深色主题](https://github.com/tonyliuzj/komari-next/blob/main/images/dark-theme.png?raw=true)

## 功能特性

* 服务器与节点状态的实时仪表盘
* 实例详情页，包含负载与延迟图表
* 节点列表与管理视图
* 基于 `react-i18next` 的国际化（i18n）
* 使用 Shadcn + Tailwind CSS 的响应式布局与深色模式
* 适配 Komari 主题系统的主题打包方案
* **丰富的自定义选项：**

  * **6 种配色主题：** Default、Ocean、Sunset、Forest、Midnight、Rose
  * **4 种卡片布局：** Classic、Modern、Minimal、Detailed —— 每种都有独特的视觉设计与元素布局
  * **4 种图表样式：** Circle、Progress Bar、Bar Chart、Minimal —— 均会跟随所选配色主题
  * **可自定义状态卡片：** 可在仪表盘中显示/隐藏单项指标
  * **自带背景图！** 使用图片 URL 将其设置为背景。
  * **背景模糊：** 可为自定义背景图启用 Soft 或 Glass 模糊效果，并调整模糊强度。
  * **卡片模糊：** 可启用 Soft 或 Glass 卡片背景，分别调整卡片透明强度与额外模糊强度。
  * **Ping 统计显示** 在首页即可直接展示数据包信息！
  * 所有设置会在本地持久化保存，并可在主题切换时同步

## 技术栈

* **框架：** Next.js（App Router，静态导出）
* **语言：** TypeScript、React
* **UI：** Shadcn UI + Radix UI primitives、Tailwind CSS v4
* **图表：** Recharts
* **状态 / 数据：** 自定义 Context、RPC2 客户端、基于 fetch 的 API

## 前置要求

* **Node.js** 22 或更高版本（推荐使用 LTS）
* 一个可从浏览器访问的 **Komari 后端**（API）

## 快速开始

* 直接[下载主题文件](https://github.com/tonyliuzj/komari-next/releases/latest/download/dist-release.zip)，并通过 Komari 管理后台上传，这是推荐方式。

## 开发

克隆本仓库并安装依赖：

```bash
npm install
```

### 配置 API 目标地址

前端通过 `next.config.ts` 中配置的 `/api/*` rewrites 与 Komari 后端通信。
使用 `NEXT_PUBLIC_API_TARGET` 设置后端基础地址：

在项目根目录创建 `.env.local` 文件：

```env
NEXT_PUBLIC_API_TARGET=http://127.0.0.1:25774
```

请根据你的 Komari 后端实例调整该 URL。

### 本地开发运行

```bash
npm run dev
```

然后在浏览器中打开 `http://localhost:3000`。

### 生产构建 / 主题打包

本项目已配置为静态导出（`next.config.ts` 中的 `output: "export"`），构建产物会输出到 `dist/`。

```bash
npm run build
```

构建完成后：

* 使用任意静态 Web 服务器托管 `dist` 目录，**或**
* 将 `dist` 内容作为 Komari 主题包的一部分使用。

## 主题开发

本仓库设计为可作为自定义 Komari 主题使用。

1. 根据需要配置并自定义 UI。
2. 编辑 `komari-theme.json`，匹配你的主题元数据和设置项。
3. 构建项目：

   ```bash
   npm run build
   ```

4. 静态资源会生成到 `dist` 目录。
   按照 Komari 主题系统要求，将其与 `komari-theme.json` 组合，并根据 Komari 文档进行打包。

## 脚本

* `npm run dev` - 启动 Next.js 开发服务器
* `npm run build` - 将静态站点构建到 `dist/`
* `npm run lint` - 对项目运行 ESLint

## 贡献

欢迎贡献。
如果你发现问题或有改进建议，欢迎提交 issue 或 pull request。

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=tonyliuzj/komari-next&type=date&legend=top-left)](https://www.star-history.com/#tonyliuzj/komari-next&type=date&legend=top-left)
