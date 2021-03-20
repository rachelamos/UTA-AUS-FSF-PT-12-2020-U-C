DROP DATABASE IF EXISTS playlistDB;

CREATE DATABASE playlistDB;

USE playlistDB;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(20) NULL,
  artist VARCHAR(20) NULL,
  genre VARCHAR(20) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Sky Blue Sky", "Wilco", "American Rock");

INSERT INTO songs (title, artist, genre)
VALUES ("Reptillia", "The Strokes", "Indie Rock";

INSERT INTO songs (title, artist, genre)
VALUES ("Tree Fingers", "Radiohead", "Alt Rock");