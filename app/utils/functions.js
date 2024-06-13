// Function to calculate total income and total expenses
export function calculateIncomeAndExpenses(transactions) {
    let totalIncome = 0;
    let totalExpenses = 0;
   
    transactions.forEach(transaction => {
      if (transaction.flow === "Income") {
        totalIncome += parseFloat(transaction.amount);
      } else if (transaction.flow === "Expense") {
        totalExpenses += parseFloat(transaction.amount);
      }
    });
  
    return { totalIncome, totalExpenses };
  }