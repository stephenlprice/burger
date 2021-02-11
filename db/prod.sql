

USE [prod database];

CREATE TABLE [prod database].burger (
    id INT(30) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    devoured BOOLEAN NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO [prod database].burger (name, devoured) 
VALUES 
("Hamburguesa de Romero's", true),
("Hamburguesa de Rusty", true),
("Homemade So-So Burger", true),
("Whataburger Patty Melt", false),
("P. Terry's Cheeseburger", false),
("Montana Ted's Bison Burger", false),
("Mcdonald's Quarter Pounder", false),
("Wendy's Baconator", false),
("In-N-Out Double Double", false),
("Dan's Hamburgers", false);

SELECT * FROM [prod database].burger;

-- DROP TABLE [prod database].burger;