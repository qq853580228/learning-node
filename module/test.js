// 模块的加载机制

// 模块在第一次加载会被缓存。意味着多次调用 require 不会导致模块被多次执行。
// 内置模块、用户自定义模块和第三方模块都会优先从缓存中读取，提高模块的加载速度。

const a = require('./exports');
const b = require('./exports');
const c = require('./exports');

// require 加载自定义模块的时候，需要加 ./ 或 ../，否则会被当成内置模块或者第三方模块进行加载

/* --- 1 
  require('./test.js');
  require('./test');

  require 加载自定义模块的时候，如果没有加扩展名，node 会 按顺序加载以下文件：
  如果模块后缀省略，先找同名JS文件再找同名JS文件夹
  如果找到了同名文件夹，找文件夹中的index.js
  如果文件夹中没有index.js就会去当前文件夹中的package.json文件中查找main选项中的入口文件
  如果找指定的入口文件不存在或者没有指定入口文件就会报错，模块没有被找到
  
  1、按照 确切的文件名 进行加载
  2、补全 .js 扩展名进行加载
  3、补全 .json 扩展名进行加载
  4、补全 .node 扩展名进行加载
  5、加载失败，终端报错
*/

/* --- 2
  require('test');
  
  require 加载非 node 内置模块的时候，如果以 ./ 或 ../ 开头，会从当前模块的父目录开始，
  尝试从 node_modules 文件来加载第三方模块，如果没有找到，则移动到上一层父目录中继续尝试加载，
  直到文件系统的根目录。

  假设在 'C:\Users\bls\project\tools.js' 文件里面调用了 require('tools')，则 node 会按以下顺序来查找：

  1、C:\Users\bls\project\node_modules\tools
  2、C:\Users\bls\node_modules\tools
  3、C:\Users\node_modules\tools
  4、C:\node_modules\tools
  5、加载失败，终端报错
*/

/* --- 3
  require 目录作为模块，有三种加载方式：

  1、在被加载的目录下查找 package.json 文件，并寻找 main 属性作为 require 加载的入口
  2、如果目录里没有 package.json 文件或 main 属性不存在或无法解析，node 会试图加载目录下的 index.js 文件
  3、如果以上两步失败了，node 会在终端打印错误消息，报告模块的缺失：Error：Cannot find module 'xx'
*/

