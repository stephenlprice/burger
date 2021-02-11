const connection = require('./connection.js');

const selectAll = (table, data) => {
    const query = `SELECT * FROM ${table};`;
    connection.query(query, (err, result) => {
        if (err) { throw err; }
        data(result);
    });
};

const insertOne = (name, devoured, data) => {
    const query = 
    `INSERT INTO burger_db.burger (${name}, ${devoured})
    VALUES (${name}, ${devoured});`;
    connection.query(query, (err, result) => {
        if (err) { throw err; }
        data(result);
        console.log('orm.insertOne', query);
    });
};

const updateOne = (id, devoured, data) => {
    console.log('orm.updateOne', id, devoured);
    if (devoured === 'true') {
        console.log('orm.updateOne', 'make false');
        const query = 
        `UPDATE burger_db.burger
        SET devoured = false
        WHERE id = ${id}`;
        connection.query(query, (err, result) => {
            if (err) { throw err; }
            data(result);
            console.log('orm.updateOne', query);
        });
    }
    else if (devoured === 'false') {
        console.log('orm.updateOne', 'make true');
        const query = 
        `UPDATE burger_db.burger
        SET devoured = true
        WHERE id = ${id}`;
        connection.query(query, (err, result) => {
            if (err) { throw err; }
            data(result);
            console.log('orm.updateOne', query);
        });
    }
};

const orm = {
    selectAll,
    insertOne,
    updateOne
};

module.exports = orm;