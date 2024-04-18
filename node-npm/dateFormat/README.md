<!-- ## 初始化包的基本结构 -->

<!-- 1、package.json --- 包配置管理文件
2、index.js --- 包的入口文件
3、README.md --- 包的说明文档 -->

## 安装
```
npm install bls-node-tools
```

## 导入

```js
const tools = require('bls-node-tools');
```

## 格式化时间
```js
const dateStr = tools.dateFormat(new Date()); // 2024-03-28 11:04:30
```

## 转换带 HTML 的字符串
```js
const htmlStr = '<script>alert("hello")</script>';
const escapeStr = tools.HTMLEscape(htmlStr); // &lt;script&gt;alert(&quot;hello&quot;)&lt;/script&gt;
```

## 还原为带 HTML 的字符串
```js
const str = '&lt;script&gt;alert(&quot;hello&quot;)&lt;/script&gt;';
const htmlStr = tools.HTMLUnEscape(str); // <script>alert("hello")</script>
```

## 开源协议
ISC