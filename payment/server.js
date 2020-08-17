const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const router = require('./api/routes');
require('dotenv').config();

const port = process.env.PORT || 3031;

const app = new Koa();
app
    .use(cors())
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());

const server = app.listen(port, () => console.log(`Listening on ${port}...`));
