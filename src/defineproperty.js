// const obj = {};

// obj.name = 'zhangsan';

// console.log(obj);

// 上面的代码等价于下面的defineProperty形式
// const obj = {};

// Object.defineProperty(obj, 'name', {
//   value: 'zhangsan2',
//   configurable: true, // 决定是否可被删除 delete obj.name 和 配置
//   writable: true,  // 决定是否可被再赋值和使用defineProperty进行重定义redefine
//   enumerable: true, // 决定是否可被for in 遍历以及Object.keys收集
// });

// console.log(obj);

// 定义多个属性用defineProperties

const obj = {};

let value = null;
Object.defineProperties(obj, {
  name: {
    get() {
      return value;
    },
    set(newValue) {
      value = 'my name is ' + newValue;
      return value;
    },
    configurable: true,
    enumerable: true,
  },
  age: {
    value: 12,
    configurable: true,
    writable: true,
    enumerable: true,
  },
});

obj.name = 'zhangsan';

console.log(obj);
console.log(obj.name);
