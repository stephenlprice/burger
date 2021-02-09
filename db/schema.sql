CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burger_db.burger (
    id INT(30) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    devoured BOOLEAN NOT NULL
);
