const Koa   = require('koa');
const app   = new Koa();
const serve = require('koa-static');
const path  = require('path');

const main = serve(path.join(__dirname, 'files'));

app.use(main);

app.listen(3000);
console.log('server start at 3000');

