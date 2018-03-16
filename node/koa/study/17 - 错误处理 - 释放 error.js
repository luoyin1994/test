// 如果错误被 try ... catch 捕获，就不会触发 error 事件。
// 如果要触发，需要调用 ctx.app.emit 手动释放 error 事件，才能让监听函数生效。
const Koa     = require('koa');
const app     = new Koa();
const handler = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.response.status = err.statusCode || err.status || 500;
        ctx.response.type   = 'html';
        ctx.response.body   = '<p>Something wrong, please contact administrator.</p>>';
        ctx.app.emit('error', err, ctx);
    }
};
const main    = function(ctx, next) {
    ctx.throw(500);
};

app.on('error', (err, ctx) => {
    console.error('server error', err);
});
app.use(main);
app.listen(3000);
console.log('server start at 3000');

