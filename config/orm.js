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
    `INSERT INTO burger_db.burger (name, devoured)
    VALUES ("${name}", ${devoured});`;
    connection.query(query, (err, result) => {
        if (err) { throw err; }
        data(result);
    });
};

const updateOne = (id, devoured, data) => {
    if (devoured === 'true') {
        const query = 
        `UPDATE burger_db.burger
        SET devoured = false
        WHERE id = ${id}`;
        connection.query(query, (err, result) => {
            if (err) { throw err; }
            data(result);
        });
    }
    else if (devoured === 'false') {
        const query = 
        `UPDATE burger_db.burger
        SET devoured = true
        WHERE id = ${id}`;
        connection.query(query, (err, result) => {
            if (err) { throw err; }
            data(result);
        });
    }
};

const orm = {
    selectAll,
    insertOne,
    updateOne
};

module.exports = orm;