// exports 是简写方式
// 默认情况下 exports 和 module.exports 指向同一个对象，最终会以 module.exports 导出的对象为准

exports.name = 'bls';
module.exports.age = 18;
console.log('ok');
// { name: 'bls', age: 18 }

// module.exports = {
//   user: {
//     name: 'bls',
//     age: 18,
//   }
// }