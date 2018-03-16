const os      = require('os');
const fs      = require('fs');
const path    = require('path');
const Koa     = require('koa');
const app     = new Koa();
const koaBody = require('koa-body'); // 从 POST 请求的数据体里面提取键值对。

const main = function(ctx, next) {
    const tmpdir    = os.tmpdir();
    const filePaths = [];
    const files     = ctx.request.body.files || {};

    for (let key in files) {
        const file     = files[key];
        const filePath = path.join(tmpdir, file.name);
        const reader   = fs.createReadStream(file.path);
        const writer   = fs.createWriteStream(filePath);
        reader.pipe(writer);
        filePaths.push(filePath);
    }
    ctx.body = filePaths;

};

app.use(koaBody({multipart: true}));
app.use(main);
app.listen(3000);
console.log('server start at 3000');

