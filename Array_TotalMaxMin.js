// 1. Create an array called expenses that contains at least 5 different expense amounts
let expenses = [120.50, 85.00, 400.75, 150.25, 230.00];

// 2. Calculate the total expenses by summing all the elements of the array
let totalExpenses = 0;
for (let i = 0; i < expenses.length; i++) {
    totalExpenses += expenses[i];
}

// 3. Find the highest and lowest individual expenses within the array
let maxExpense = expenses[0];
let minExpense = expenses[0];

for (let i = 1; i < expenses.length; i++) {
    if (expenses[i] > maxExpense) {
        maxExpense = expenses[i];
    }
    if (expenses[i] < minExpense) {
        minExpense = expenses[i];
    }
}

// Output the results
console.log("Total Expenses: " + totalExpenses);
console.log("Highest Expense: " + maxExpense);
console.log("Lowest Expense: " + minExpense);
