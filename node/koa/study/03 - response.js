const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    const req = ctx.request;
    const res = ctx.response;
    if (req.accepts('xml')) {
        res.type = 'xml';
        res.body = '<data>Hello world</data>';
    }
    else if (req.accepts('json')) {
        res.type = 'json';
        res.body = {data: 'Hello world'};
    }
    else if (req.accepts('html')) {
        res.type = 'html';
        res.body = '<p>Hello World</p>';
    }
    else {
        res.type = 'text';
        res.body = 'Hello world';
    }
};

app.use(main);

app.listen(3000);
console.log('server start at 3000');

