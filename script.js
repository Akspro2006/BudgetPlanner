// ... (same as before) ...

const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const addExpenseButton = document.getElementById('add-expense');
const expensesList = document.getElementById('expenses-list'); // New element for the list

addExpenseButton.addEventListener('click', () => {
  const expenseName = expenseNameInput.value;
  const expenseAmount = parseFloat(expenseAmountInput.value);
  if (!isNaN(expenseAmount)) {
    expenses.push({ name: expenseName, amount: expenseAmount }); // Add expense to the expenses array
    totalExpenses.textContent = `$${calculateTotalExpenses()}`;
    updateRemainingBalance();
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
    renderExpensesList(); // Update the expenses list
  }
});

function calculateTotalExpenses() {
  let total = 0;
  for (const expense of expenses) {
    total += expense.amount;
  }
  return total;
}

function renderExpensesList() {
  expensesList.innerHTML = ''; // Clear the list
  for (const expense of expenses) {
    const listItem = document.createElement('li');
    listItem.textContent = `${expense.name}: $${expense.amount}`;
    expensesList.appendChild(listItem);
  }
}
