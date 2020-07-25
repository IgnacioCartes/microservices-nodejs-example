const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync(path.join(__dirname, './data.json'));
const db = low(adapter);

// defaults
db.defaults({ products: [] }).write();

module.exports = db;
