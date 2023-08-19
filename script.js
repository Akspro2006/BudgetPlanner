const incomeInput = document.getElementById('income-input');
const addIncomeButton = document.getElementById('add-income');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const addExpenseButton = document.getElementById('add-expense');
const totalIncome = document.getElementById('total-income');
const totalExpenses = document.getElementById('total-expenses');
const remainingBalance = document.getElementById('remaining-balance');

let income = 0;
let expenses = 0;

addIncomeButton.addEventListener('click', () => {
  const incomeAmount = parseFloat(incomeInput.value);
  if (!isNaN(incomeAmount)) {
    income += incomeAmount;
    totalIncome.textContent = `$₹{income}`;
    updateRemainingBalance();
    incomeInput.value = '';
  }
});

addExpenseButton.addEventListener('click', () => {
  const expenseName = expenseNameInput.value;
  const expenseAmount = parseFloat(expenseAmountInput.value);
  if (!isNaN(expenseAmount)) {
    expenses += expenseAmount;
    totalExpenses.textContent = `$₹{expenses}`;
    updateRemainingBalance();
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
  }
});

function updateRemainingBalance() {
  const balance = income - expenses;
  remainingBalance.textContent = `$₹{balance}`;
}
