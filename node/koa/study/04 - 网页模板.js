const Koa  = require('koa');
const app  = new Koa();
const fs   = require('fs');
const main = ctx => {
    const req = ctx.request;
    const res = ctx.response;
    res.type  = 'html';
    res.body  = fs.createReadStream('./files/template.html');
};

app.use(main);

app.listen(3000);
console.log('server start at 3000');

