<template>
    <div class="catalog">
        <h1>Cart</h1>
        <div class="item" v-for="item in cart" :key="item.id">
            <h2>{{ item.item.name }}</h2>
            <img class="product-image" v-bind:src="'http://localhost:3040/' + item.item.image"/>
            <h4>Quantity: {{ item.quantity }}</h4>
            <h4>Price: {{ item.item.price * item.quantity }} {{ item.item.currency }}</h4>
            <button v-show="!payComponentOpen" class="cancel" v-on:click="removeFromCart(item)">Remove from cart</button>
        </div>
        <h3>Total: ${{ totalCartPrice }}</h3>
        <button v-if="cart.length > 0 && !payComponentOpen" class="pay" v-on:click="openPaymentComponent()"><b>$</b> Pay</button>
        <payment v-if="payComponentOpen" v-bind:amount="totalCartPrice"></payment>
        <button v-if="payComponentOpen" class="cancel" v-on:click="closePaymentComponent()">Cancel payment</button>
    </div>
</template>

<script>
import Payment from './Payment';
import cartMixin from '../mixins/cartMixin';

export default {
    name: 'Cart',
    components: {
        payment: Payment
    },
    data: function() {
        return {
            payComponentOpen: false
        };
    },
    mixins: [ cartMixin ],
    created: function () {
    },
    methods: {
        openPaymentComponent: function() {
            this.payComponentOpen = true;
        },
        closePaymentComponent: function() {
            this.payComponentOpen = false;
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

button.cancel {
    background-color: #a04;
    border: 1px solid #f8d;
    border-radius: 3px;
    padding: 0.5em;
    margin: 0.5em;
    color: #fae;
    cursor: pointer;
}

button.pay {
    background-color: #0a4;
    border: 1px solid #8fd;
    border-radius: 3px;
    padding: 0.5em 2em;
    margin: 0.5em;
    color: #afe;
    cursor: pointer;
}
</style>
