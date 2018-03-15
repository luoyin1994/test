// koa 的一个重要的特色，也是最重要的设计，就是中间件（middleware）。
// 多个中间件形成一个栈的结构（middle stack），以“先进后出”（first-in-last-out）的顺序执行。
const Koa = require('koa');
const app = new Koa();

const one   = (ctx, next) => {
    console.log('---> one');
    next();
    console.log('one <---');
};
const two   = (ctx, next) => {
    console.log('---> two');
    // next();  // 注释掉该 next 后，执行权不会往后传递，执行到该中间件结束。相当于最后一个中间件有 next 函数，但其后没有中间件时的情况
    console.log('two <---');
};
const three = (ctx, next) => {
    console.log('---> three');
    next();
    console.log('three <---');
};
const four = (ctx, next) => {
    console.log('---> four');
    next();
    console.log('four <---');
};
app.use(one);
app.use(two);
app.use(three);
app.use(four);

app.listen(3000);
console.log('server start at 3000');

