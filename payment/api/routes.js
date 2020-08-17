const Router = require('@koa/router');
const controller = require('./controller');

const router = new Router({
    prefix: '/payment'
});

router.post('/', controller.validatePayment);

module.exports = router;
