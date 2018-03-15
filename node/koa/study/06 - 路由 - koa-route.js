const Koa   = require('koa');
const app   = new Koa();
const route = require('koa-route');

const about = ctx => {
    const req = ctx.request;
    const res = ctx.response;
    res.type  = 'html';
    res.body  = '<a href="/">Index Page</a>';
};
const main  = ctx => {
    const req = ctx.request;
    const res = ctx.response;
    res.body  = 'Hello World';
};

app.use(route.get('/', main));
app.use(route.get('/about', about));

app.listen(3000);
console.log('server start at 3000');

