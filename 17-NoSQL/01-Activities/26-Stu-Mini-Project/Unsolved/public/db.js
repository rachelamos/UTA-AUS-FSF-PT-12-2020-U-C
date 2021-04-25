let db;
// create a new db request for a "BudgetDB" database.
const request = indexDB.open('BudgetDB', 1);

request.onupgradeneeded = function (event) {
  // create object store called "BudgetStore" and set autoIncrement to true
  const db = event.target.result;
  const budgetStore = db.createObjectStore('budgetStore', {
    keyPath: "listID"
  });
  budgetStore.createIndex("itemIndex", "item");
};

request.onsuccess = function (event) {
  db = event.target.result;
  

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  // log error here
  console.log(error)
};

function saveRecord(record) {
  // create a transaction on the pending db with readwrite access
  const transaction = db.transaction(["budgetStore"], 'readwrite')
  // access your pending object store
  const budgetStore = transaction.objectStore('budgetStore');
  const itemIndex = budgetStore.index('itemIndex');
  // add record to your store with add method.
  budgetStore.add({listID: "1", status: "complete"});
  budgetStore.add({listID: "2", status: "in progress"});
}

function checkDatabase() {
  // open a transaction on your pending db
  const getCursorRequest = budgetStore.openCursor();
  // access your pending object store
  getCursorRequest.onsucess = e => {
    const cursor = e.target.result;
    if (cursor) {
      console.log(cursor.value);
      cursor.continue();
    } else {
      console.log("no documents left!")
    }
  }
  // get all records from store and set to a variable

  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then(() => {
          // if successful, open a transaction on your pending db
          
          // access your pending object store
          // clear all items in your store
        });
    }
  };
}

// listen for app coming back online
window.addEventListener('online', checkDatabase);
