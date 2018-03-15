const Koa     = require('koa');
const app     = new Koa();
const handler = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.response.status = err.statusCode || err.status || 500;
        ctx.response.body   = {
            message: err.message
        };
    }
};

const main = function(ctx, next) {
    ctx.throw(200);
};

app.use(handler);
app.use(main);
app.listen(3000);
console.log('server start at 3000');

