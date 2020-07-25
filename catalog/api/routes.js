const Router = require('@koa/router');
const controller = require('./controller');

const router = new Router({
    prefix: '/catalog'
});

router.get('/', controller.findAll);
router.get('/:productId', controller.findById);

module.exports = router;
