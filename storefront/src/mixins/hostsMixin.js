const HOSTS = {
    IMAGE_BUCKET: 'http://localhost:3040',
    CATALOG: 'http://localhost:3030'
};


const hostsMixin = {
    methods: {
        getHost: function(value) {
            return HOSTS[value]
        }
    }
};

export default hostsMixin;
