// koa 的一个重要的特色，也是最重要的设计，就是中间件（middleware）。
const Koa = require('koa');
const app = new Koa();

const logger = (ctx, next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    next(); // 将执行权交给下一个中间件
};

const main = (ctx, next) => {
    ctx.response.body = 'Hello World';
};

app.use(logger);
app.use(main);

app.listen(3000);
console.log('server start at 3000');

