const Koa  = require('koa');
const app  = new Koa();

const main = ctx => {
    const req = ctx.request;
    const res = ctx.response;
    if (req.path !== '/') {
        res.type = 'html';
        res.body = '<a href="/">Index Page</a>';
    }
    else {
        res.body = 'Hello world';
    }
};

app.use(main);

app.listen(3000);
console.log('server start at 3000');

