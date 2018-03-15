const Koa  = require('koa');
const app  = new Koa();
const fs   = require('fs.promised');
const main = async function(ctx, next) {
    let {response: res} = ctx;
    res.type            = 'text';
    res.body            = await fs.readFile('./files/jQuery.js', 'utf8');
};
app.use(main);

app.listen(3000);
console.log('server start at 3000');

