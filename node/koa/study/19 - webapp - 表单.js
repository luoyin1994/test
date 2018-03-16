const Koa     = require('koa');
const app     = new Koa();
const koaBody = require('koa-body'); // 从 POST 请求的数据体里面提取键值对。
const main    = function(ctx, next) {
    const body = ctx.request.body;
    if (!body.name) {
        ctx.throw(400, '.name required');
    }
    if (ctx.request.path === '/post') {
        console.log(JSON.stringify(body));
        ctx.response.body = {name: body.name};
    }
};

const fs          = require('fs');
const addTemplate = (ctx, next) => {
    const req = ctx.request;
    const res = ctx.response;
    if (req.path === '/') {
        res.type = 'html';
        res.body = fs.createReadStream('./files/test.html');
    }
    next();
};

app.use(koaBody());
app.use(addTemplate);
app.use(main);
app.listen(3000);
console.log('server start at 3000');

