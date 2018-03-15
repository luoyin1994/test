const Koa = require('koa');
const app = new Koa();

const main = function(ctx, next) {
    ctx.response.status = 404;
    ctx.response.body   = 'Page Not Found';
};

app.use(main);
app.listen(3000);
console.log('server start at 3000');

