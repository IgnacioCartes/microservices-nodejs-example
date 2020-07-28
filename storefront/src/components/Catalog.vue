<template>
    <div class="catalog">
        <h1>Catalog</h1>
        <div class="item" v-for="product in catalog" :key="product.id">
            <h2>{{ product.name }}</h2>
            <img class="product-image" v-bind:src="'http://localhost:3040/' + product.image"/>
            <h3>Price: {{ product.price }} {{ product.currency }}</h3>
            <button class="add-to-cart" v-on:click="addToCart(product)">Add to cart</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Catalog',
    data: function() {
        return {
            catalog: []
        };
    },
    created: function () {
        fetch('http://localhost:3030/catalog/')
            .then(res => res.json())
            .then(catalog => this.catalog = catalog);
    },
    methods: {
        addToCart: function(itemToAdd) {
            // Keeping things simple, localStorage JSON cart
            const storage = JSON.parse(window.localStorage.getItem('ms-njs-cart')) || { cart: [] };

            const existingItem = storage.cart.find(item => item.id === itemToAdd.id);
            if (existingItem) existingItem.quantity++;
            else storage.cart.push({
                id: itemToAdd.id,
                item: itemToAdd,
                quantity: 1
            });

            window.localStorage.setItem('ms-njs-cart', JSON.stringify(storage));
            alert(`${itemToAdd.name} added to cart!`);
        }
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
