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
        <h3>Total: ${{ totalCartPrice }}</h3>
        <button class="add-to-cart" v-on:click="addToCart(product)">Add to cart</button>
    </div>
</template>

<script>
import cartMixin from '../mixins/cartMixin';

export default {
    name: 'Cart',
    mixins: [ cartMixin ],
    created: function () {},
    methods: {},
    computed: {}
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
