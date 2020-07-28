<template>
    <div class="catalog">
        <h1>Cart</h1>
        <div class="item" v-for="item in cart" :key="item.id">
            <h2>{{ item.item.name }}</h2>
            <img class="product-image" v-bind:src="'http://localhost:3040/' + item.item.image"/>
            <h4>Quantity: {{ item.quantity }}</h4>
            <h4>Price: {{ item.item.price * item.quantity }} {{ item.item.currency }}</h4>
            <button class="remove-from-cart" v-on:click="removeFromCart(item)">Remove from cart</button>
        </div>
        <h3>Total: ${{ totalPrice }}</h3>
    </div>
</template>

<script>
export default {
    name: 'Cart',
    data: function() {
        return {
            cart: []
        };
    },
    created: function () {
        const storage = JSON.parse(window.localStorage.getItem('ms-njs-cart')) || { cart: [] };
        this.cart = storage.cart;
    },
    methods: {
        removeFromCart: function(itemToRemove) {
            const existingItemIndex = this.cart.findIndex(item => item.id === itemToRemove.id);
            this.cart.splice(existingItemIndex, 1);

            window.localStorage.setItem('ms-njs-cart', JSON.stringify({ cart: this.cart }));
            alert(`${itemToRemove.item.name} removed from cart!`);
        }
    },
    computed: {
        totalPrice: function() {
            return this.cart.reduce((previous, current) => previous + (current.item.price * current.quantity), 0);
        }
    }
}
</script>

<style scoped>

.item {
    margin-bottom: 2.5em;
}

.product-image {
    height: 5em;
    align: left;
}

button.remove-from-cart {
    background-color: #a04;
    border: 1px solid #f8d;
    border-radius: 3px;
    padding: 0.5em;
    color: #fae;
    cursor: pointer;
}
</style>
