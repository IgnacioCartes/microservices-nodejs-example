const Koa = require('koa');
const router = require('./api/routes');

require('dotenv').config();

const port = process.env.PORT || 3030;
const app = new Koa();

app
    .use(router.routes())
    .use(router.allowedMethods());

const server = app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
