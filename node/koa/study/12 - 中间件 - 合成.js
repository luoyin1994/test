// koa-compose 可以将多个中间件合成为一个
const Koa     = require('koa');
const app     = new Koa();
const compose = require('koa-compose');
const logger  = (ctx, next) => {
    let {request: req} = ctx;
    console.log(`${Date.now()} ${req.method} ${req.url}`);
    next();
};

const main = async function(ctx, next) {
    let {response: res} = ctx;
    res.body            = 'Hello world';
};

const middlewares = compose([logger, main]);

app.use(middlewares);

app.listen(3000);
console.log('server start at 3000');

