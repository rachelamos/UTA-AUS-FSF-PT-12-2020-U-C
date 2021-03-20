const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'etemeo930',
  database: 'playlistDB',
});

const afterConnection = () => {
  connection.query('SELECT * FROM songs', (err, res) => {
    if (err) throw err;
    console.log(res);
  });
  connection.query('SELECT title FROM songs', (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
};

// const afterConnection2 = () => {
//     connection.query('SELECT title FROM songs', (err, res) => {
//       if (err) throw err;
//       console.log(res);
//       connection.end();
//     });
//   };

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  afterConnection();
//   afterConnection2();
});
