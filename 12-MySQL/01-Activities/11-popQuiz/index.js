const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'etemeo930',
  database: 'newDB',
});

const readBooks = () => {
  console.log('Selecting all books...\n');
  connection.query('SELECT * FROM books', (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
};

const deleteBooks = () => {
  console.log('Deleting Scythe...\n');
  connection.query(
    'DELETE FROM books WHERE ?',
    {
      title: 'Scythe',
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} books deleted!\n`);
      // Call readbooks AFTER the DELETE completes
      readBooks();
    }
  );
};

const updateBooks = () => {
  console.log('Updating all books...\n');
  const query = connection.query(
    'UPDATE books SET ? WHERE ?',
    [
      {
        pubYear: 1954,
      },
      {
        title: 'The Two Towers',
      },
    ],
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} books updated!\n`);
      // Call deleteProduct AFTER the UPDATE completes
      deleteBooks();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
};

const createBook = () => {
  console.log('Inserting a new product...\n');
  const query = connection.query(
    'INSERT INTO books SET ?',
    {
      title: 'The Two Towers',
      author: "J.R.R. Tolkien",
      pubYear: 1955,
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} product inserted!\n`);
      // Call updateProduct AFTER the INSERT completes
      updateBooks();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
};

// Connect to the DB
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  createBook();
});
