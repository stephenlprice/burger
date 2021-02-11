const orm = require('../config/orm.js');

const burger = {
    all(response) {
        orm.selectAll('burger', (data) => {
            response(data);
        });
    },
    create(name, devoured, response) {
        orm.insertOne(name, devoured, (data) => {
            console.log('burger.create', data);
            response(data);
        });
    },
    update(id, devoured, response) {
        orm.updateOne(id, devoured, (data) => {
            console.log('burger.update', data);
            response(data);
        });
    }
};

module.exports = burger;