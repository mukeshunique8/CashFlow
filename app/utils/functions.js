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

  export const getUsers = async (setUsers) => {
    try {
      const response = await getDocs(userCollectionRef);
      const usersArray = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsers(usersArray);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  export  const createUser = async () => {
    try {
      await addDoc(userCollectionRef, { name: newName, password: newPassword });
      console.log("User added successfully");
      getUsers();
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

  export  const validateUser = async () => {
    const isSameUser = users.some((item) => item.name === newName);
    if (!isSameUser) {
      createUser();
      setCurrentUser(newName);
    } else {
      console.log("User already exists");
      alert("User already exists");
    }
  };