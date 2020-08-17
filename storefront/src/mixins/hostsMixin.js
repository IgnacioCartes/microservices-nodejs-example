const HOSTS = {
    CATALOG: 'http://localhost:3030',
    PAYMENT: 'http://localhost:3031',
    IMAGE_BUCKET: 'http://localhost:3040'
};


const hostsMixin = {
    methods: {
        getHost: function(value) {
            return HOSTS[value]
        }
    }
};

export default hostsMixin;
