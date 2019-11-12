Create database burgers_db;

Use burgers_db;

CREATE TABLE burgers (
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(50),
    devoured BOOLEAN
);