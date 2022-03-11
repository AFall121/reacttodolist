// 在nodejs17.5中使用fetch

// 用rap2来获取数据
// http://rap2api.taobao.org/app/mock/data/:interfaceId?scope=response|request
// scope	描述
// response	获取单个接口的响应数据（JSON）
// request	获取单个接口的请求数据（JSON）
// http://rap2api.taobao.org/app/mock/:repositoryId/:method/:url
const axios = require('axios');
let url = 'http://rap2api.taobao.org/app/mock/:repositoryId/:method/:url';

// axios('https://jsonplaceholder.typicode.com/posts')
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// axios('http://rap2api.taobao.org/app/mock/data/2213203?scope=response')
//   .then((res) => {
//     console.log(res.data.todos);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// node 中的fetch 有问题 --experimental-fetch --trace-warnings
fetch('http://rap2api.taobao.org/app/mock/data/2213203?scope=response')
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
