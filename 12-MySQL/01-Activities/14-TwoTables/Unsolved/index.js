const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'etemeo930',
  database: 'top_songsDB',
});

// SELECT title, firstName, lastName
// FROM books
// INNER JOIN authors ON books.authorId = authors.id;

const queryArtist = (selArtist) => {
    connection.query('SELECT * FROM top5000 WHERE artist=?', [selArtist], (err, res) => {
      if (err) throw err;
      res.forEach(({ position, song, artist}) => {
        console.log(`${position} | ${song} | ${artist}`);
      });
      console.log('-----------------------------------');
    });
};

const multipleHits = (showHits) => {
    connection.query('SELECT artist FROM top5000 GROUP BY artist HAVING COUNT(*) > 1', [showHits], (err, res) => {
      if (err) throw err;
      res.forEach(({ position, song, artist}) => {
        console.log(`${position} | ${song} | ${artist}`);
      });
      console.log('-----------------------------------');
    });
};

// Connect to the DB
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  queryArtist('The Beatles');
  multipleHits();
});