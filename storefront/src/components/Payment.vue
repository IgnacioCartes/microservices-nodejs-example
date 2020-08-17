<template>
    <div class="payment">
        <hr/>
        <p>Please enter your Fictional &trade; Credit Card Number</p>
        <p><small>It must contain exactly twelve numbers and end in 0 to be "valid"</small></p>
        <input type="text" v-model="creditCardNumber" placeholder="000000000000"/>
        <button :disabled="!creditCardNumber || processingPayment" class="pay" v-on:click="confirmPayment(cart, amount, creditCardNumber)">Confirm payment</button>
        <p v-show="errorMessage" class="error">{{errorMessage}}</p>
        <hr/>
    </div>
</template>

<script>
import cartMixin from '../mixins/cartMixin';
import hostsMixin from '../mixins/hostsMixin';

export default {
    name: 'Payment',
    mixins: [ cartMixin, hostsMixin ],
    data: function() {
        return {
            creditCardNumber: '',
            processingPayment: false,
            errorMessage: ''
        };
    },
    props: {
        amount: Number
    },
    methods: {
        confirmPayment: function(cart, amount, creditCardNumber) {
            const body = JSON.stringify({ cart, amount, creditCardNumber });
            this.processingPayment = true;
            this.errorMessage = '';

            fetch(this.getHost('PAYMENT') + '/payment/', { method: 'POST', body, headers:{ 'Content-Type': 'application/json' }})
                .then(res => res.json())
                .then(response => {
                    if (response.status === 'success') {
                        // do redirect
                        alert('Order succesfully placed!');
                        this.clearCart();
                        this.$router.replace({ path: '/' });
                    } else {
                        // log error
                        this.errorMessage = response.message;
                    }
                })
                .finally(() => this.processingPayment = false);
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

p.error {
    font-weight: bold;
    color: #df2020;
}

</style>
