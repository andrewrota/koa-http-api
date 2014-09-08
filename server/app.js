var koa = require('koa');
var app = koa();

app.use(function*(next) {
    this.accepts('application/json');
    this.type = 'application/json';
    this.body = {
        foo: 'bar'
    };
});

// Pass in port as parameter
app.listen(process.argv[2]);