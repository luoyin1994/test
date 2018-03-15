const Koa   = require('koa');
const app   = new Koa();
const route = require('koa-route');

const redirect = ctx => {
    ctx.response.redirect('/');
};

const main = ctx => {
    ctx.response.body = 'Hello World';
};

app.use(route.get('/', main));
app.use(route.get('/redirect', redirect));

app.use(main);
app.listen(3000);
console.log('server start at 3000');

