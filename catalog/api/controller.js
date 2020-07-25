const db = require('../db/service');

const CatalogController = {
    findAll: (ctx, next) => {
        const catalog = db.get('products').value();
        return ctx.body = catalog;
    },
    findById: (ctx, next) => {
        const product = db.get('products').find({ id: parseInt(ctx.params.productId) }).value();
        return ctx.body = product;
    }
};

module.exports = CatalogController;
