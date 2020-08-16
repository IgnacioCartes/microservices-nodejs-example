const LOCAL_STORAGE_CART_KEY = '$cart.app.ms-njs';

const cartMixin = {
    data: function() {
        return {
            cart: []
        };
    },
    created: function () {
        this.loadCart().then(storage => {
            this.cart = storage.cart;
        });
    },
    methods: {
        loadCart: function() {
            return Promise.resolve(JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_CART_KEY)) || { cart: [] });
        },
        writeCart: function(cart) {
            return window.localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify({ cart }));
        },
        addItemToCart: function(itemToAdd) {
            // Keeping things simple, localStorage JSON cart
            const existingItem = this.cart.find(item => item.id === itemToAdd.id);
            if (existingItem) existingItem.quantity++;
            else this.cart.push({
                id: itemToAdd.id,
                item: itemToAdd,
                quantity: 1
            });

            this.writeCart(this.cart);
            alert(`${itemToAdd.name} added to cart!`);
        },
        removeItemFromCart: function(itemToRemove) {
            const existingItemIndex = this.cart.findIndex(item => item.id === itemToRemove.id);
            this.cart.splice(existingItemIndex, 1);
            this.writeCart(this.cart);
            alert(`${itemToRemove.item.name} removed from cart!`);
        }
    },
    computed: {
        totalCartPrice: function() {
            return this.cart.reduce((previous, current) => previous + (current.item.price * current.quantity), 0.0);
        }
    }
};

export default cartMixin;
