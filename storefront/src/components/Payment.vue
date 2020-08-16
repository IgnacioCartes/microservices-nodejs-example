<template>
    <div class="payment">
        <hr/>
        <p>Please enter your Fictional &trade; Credit Card Number</p>
        <p><small>It must contain exactly twelve numbers and end in 0 to be "valid"</small></p>
        <input type="text" v-model="creditCardNumber" placeholder="000000000000"/>
        <button :disabled="!creditCardNumber" class="pay" v-on:click="confirmPayment(cart, amount, creditCardNumber)">Confirm payment</button>
        <hr/>
    </div>
</template>

<script>
export default {
    name: 'Payment',
    data: function() {
        return {
            creditCardNumber: ''
        };
    },
    props: {
        cart: Array,
        amount: Number
    },
    methods: {
        confirmPayment: function(cart, amount, creditCardNumber) {
            console.log('PAGO', cart, amount, creditCardNumber);

        }
    }
}
</script>

<style scoped>

button.pay {
    background-color: #0a4;
    border: 1px solid #8fd;
    border-radius: 3px;
    padding: 0.5em 2em;
    margin: 0.5em;
    color: #afe;
    cursor: pointer;
}

button.pay:disabled {
    opacity: 0.5;
}
</style>
