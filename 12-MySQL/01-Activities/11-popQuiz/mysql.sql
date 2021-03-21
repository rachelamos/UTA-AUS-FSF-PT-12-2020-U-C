DROP DATABASE IF EXISTS newDB;

CREATE DATABASE newDB;

USE newDB;

CREATE TABLE books (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  author VARCHAR(45) NULL,
  pubYear INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO books (title, author, pubYear)
VALUES ("Scythe", "Neal Shusterman", 2016);

INSERT INTO books (title, author, pubYear)
VALUES ("A Darker Shade of Magic", "V.E. Schwab", 2015);

INSERT INTO books (title, author, pubYear)
VALUES ("The Hobbit", "J.R.R. Tolkien", 19377);
