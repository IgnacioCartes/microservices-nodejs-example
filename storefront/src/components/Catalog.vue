<template>
    <div class="catalog">
        <h1>Catalog</h1>
        <div class="item" v-for="product in catalog" :key="product.id">
            <h2>{{ product.name }}</h2>
            <img class="product-image" v-bind:src="getHost('IMAGE_BUCKET') + '/' + product.image"/>
            <h3>Price: {{ product.price }} {{ product.currency }}</h3>
            <button class="add-to-cart" v-on:click="addItemToCart(product)">Add to cart</button>
        </div>
    </div>
</template>

<script>
import hostsMixin from '../mixins/hostsMixin';
import cartMixin from '../mixins/cartMixin';

export default {
    name: 'Catalog',
    mixins: [ cartMixin, hostsMixin ],
    data: function() {
        return {
            catalog: [],
        };
    },
    created: function () {
        fetch(this.getHost('CATALOG') + '/catalog/')
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
