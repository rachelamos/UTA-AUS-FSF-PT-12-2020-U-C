const priceEl = document.getElementById("price");
const balanceEl = document.getElementById("balance");
const expenseEl = document.getElementById("expense");
const expensesListEl = document.getElementById("expenses-list");
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");

function addToList(name, price) {
  expensesListEl.innerHTML += `<li class="list-group-item">Name: ${name}
    <span class="ml-4">Price: ${price}</span></li>`;
}

function calculateBudget() {
  const balance = balanceEl.innerHTML;
  console.log('balance: ', balance);
  console.log('price: ', price);
  balanceEl.innerHTML = balance - price;
}

function submit(e) {
  e.preventDefault();
  addToList(expenseEl.value, priceEl.value);
  calculateBudget(priceEl.value);
}

function reset(e) {
  e.preventDefault();
}

submitBtn.onclick = submit;
resetBtn.onclick = reset;
