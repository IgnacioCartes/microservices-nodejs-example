const StaticServer = require('static-server');

require('dotenv').config();
const port = process.env.PORT || 3040;

var app = new StaticServer({
    rootPath: './contents',
    port: port,
    name: 'image-bucket',
    cors: '*'
});

app.start(() => console.log(`Listening on ${port}`));
