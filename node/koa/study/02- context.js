const Koa = require('koa');
const app = new Koa();
// ctx 代表一次对话的上下文（context），包括 HTTP 请求和 HTTP 响应。
// main 函数来设置 response body
const main = ctx => {
    ctx.response.body = 'Hello World';
};
// use 加载 main 函数
app.use(main);

app.listen(3000);
console.log('server start at 3000');
