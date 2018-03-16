const Koa     = require('koa');
const app     = new Koa();
const main    = function(ctx, next) {
    ctx.throw(500);
};
app.on('error', (err, ctx) => {
    console.error('server error', err);
});
app.use(main);
app.listen(3000);
console.log('server start at 3000');

