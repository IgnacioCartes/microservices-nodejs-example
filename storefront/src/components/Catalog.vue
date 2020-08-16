<template>
    <div class="catalog">
        <h1>Catalog</h1>
        <div class="item" v-for="product in catalog" :key="product.id">
            <h2>{{ product.name }}</h2>
            <img class="product-image" v-bind:src="'http://localhost:3040/' + product.image"/>
            <h3>Price: {{ product.price }} {{ product.currency }}</h3>
            <button class="add-to-cart" v-on:click="addItemToCart(product)">Add to cart</button>
        </div>
    </div>
</template>

<script>
import cartMixin from '../mixins/cartMixin';

export default {
    name: 'Catalog',
    mixins: [ cartMixin ],
    data: function() {
        return {
            catalog: []
        };
    },
    created: function () {
        fetch('http://localhost:3030/catalog/')
            .then(res => res.json())
            .then(catalog => this.catalog = catalog);
    }
}
</script>

<style scoped>

.item {
    margin-bottom: 5em;
}

.product-image {
    height: 10em;
    align: left;
}

button.add-to-cart {
    background-color: #0a4;
    border: 1px solid #8fd;
    border-radius: 3px;
    padding: 0.5em;
    color: #afe;
    cursor: pointer;
}
</style>
