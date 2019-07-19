const Koa = require('koa');
const opn = require('opn');
const fs = require('fs');
const app = new Koa();
const path = require('path');
const KoaStatic = require('koa-static');
app.use(KoaStatic('./static'));

app.listen(8000);
opn('http://localhost:8000/')
console.log('恭喜你，服务器启动成功：复制 http://localhost:8000/ 到浏览器即可访问');