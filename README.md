### 前言
配合 [轻松理解浏览器缓存（Koa缓存源码解析）](https://juejin.cn/post/6844904133024022536#heading-4) 食用

### 如何使用？
1. npm run dev，访问 http://127.0.0.1:3000/static
2. 打开浏览器调试工具，点击 Network 栏，刷新页面。点击资源查看请求头、响应头，重点关注状态码及以下字段

| 请求头            | 响应头        | 常见形式                      |
| ----------------- | ------------- | ----------------------------- |
| Cache-Control     | Cache-Control | Cache-Control: max-age=10     |
| If-Modified-Since | Last-Modified | Thu, 04 Mar 2021 01:52:13 GMT |
| If-None-Match     | ETag          | W/"1a0-177faef76f0"           |

### 知识点

> 点击链接跳转至 [轻松理解浏览器缓存（Koa缓存源码解析）](https://juejin.cn/post/6844904133024022536#heading-4) 对应章节

- 如何在 Koa 中实现协商缓存、添加 Etag？
  - 使用 koa-conditional-get 实现协商缓存，koa-etag 添加 etag
- [缓存有效期间，为什么总是请求 HTML，而不是从缓存中读取？](https://juejin.cn/post/6844904133024022536#heading-7)
- [浏览器缓存整体流程是？](https://juejin.cn/post/6844904133024022536#heading-24)
- [服务端返回 304 的条件是？](https://juejin.cn/post/6844904133024022536#heading-23)
- [如何生成 Etag，其原理是？](https://juejin.cn/post/6844904133024022536#heading-19)
- [Cache-Control vs Expires](https://juejin.cn/post/6844904133024022536#heading-4)
- Etag vs Last-Modified
  - 大多数时候都用，两者都是字符串，Etag 根据文件内容生成，Last-Modified 则记录文件修改时间(精确到秒)。遇到文件重复生成，但内容不变的情况时，Etag 更精确