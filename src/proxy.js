// proxy
// 代理是es7新增的一个对象，专用来拦截对象进行一些操作的，
// 还有一个reflect对象也是差不多，但有点复杂

// 核心概念： 创建的proxy就是我们要真正访问的对象的代理人
// 而实际上我们是'看不到'这个对象的，只能见到相应的proxy
const obj = {};

const handler = {
  get: function (obj, prop) {
    return prop in obj ? obj[prop] : 1;
  },
};
const pro = new Proxy(obj, handler);
pro.name = 'zhangsan';
pro.address = undefined;
console.log(pro.name); //zhangsan
console.log(obj.name); //zhangsan
console.log(pro.address); //undefined
console.log(obj.address); //undefined

console.log(obj.age); //undefined
console.log(pro.age); // 1

obj.kkk = 'kkk';

console.log(obj);
console.log(pro);
// { name: 'zhangsan', address: undefined, kkk: 'kkk' }
// { name: 'zhangsan', address: undefined, kkk: 'kkk' }

console.log(obj === pro); // false
// 可以看出pro和obj是一模一样的，但是又不相等，从某种意义
// 上来讲，这就是深拷贝有木有？当然我还是个彩笔，有待深入这些问题
let unused_var = 'suibian'