const CatalogController = {
    validatePayment: (ctx, next) => {
        const { amount, cart, creditCardNumber } = ctx.request.body;

        try {

            // quick validation - numbers only
            if (!creditCardNumber || !creditCardNumber.match(/^[0-9]+$/) || creditCardNumber.length !== 12)
                return ctx.body = {
                    status: 'error',
                    message: 'Invalid credit card number'
                };

            // and last digit must be 0
            if (creditCardNumber[creditCardNumber.length - 1] !== '0')
                return ctx.body = {
                    status: 'error',
                    message: 'Invalid credit card value - check the last digit and try again'
                };

            // amount must be a positive value
            if (amount <= 0)
                return ctx.body = {
                    status: 'error',
                    message: 'Invalid amount'
                };

            // we could connect with the catalog to check the products are valid here, but lets skip that for now and just return a success
            console.log('Order:', cart);

            return ctx.body = {
                status: 'success',
                amount
            };
        } catch (error) {
            console.log(error);
            return ctx.body = {
                status: 'error',
                error
            };
        }
    }
};

module.exports = CatalogController;
