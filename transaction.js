function solution(A, D) {
    
    let balance = 0;
    const monthlyTransactions = {}; 

    for (let i = 0; i < A.length; i++) {
      const amount = A[i];
      const date = D[i];
      const yearMonth = date.slice(0, 7); 
  
      balance += amount;
  
      if (!monthlyTransactions[yearMonth]) {
        monthlyTransactions[yearMonth] = { count: 0, total: 0 }; 
      }
  
      if (amount < 0) {
        monthlyTransactions[yearMonth].count++;
        monthlyTransactions[yearMonth].total += amount;
      }
    }
  
    for (const monthKey in monthlyTransactions) {
      const { count, total } = monthlyTransactions[monthKey];
      if (count < 3 || total >= 100) {
        balance -= 5; 
      }
    }
  
    return balance; 
  }
  
  const transactions = [100, 100, 100, -10];
  const dates = ['2020-12-31', '2020-12-22', '2020-12-03', '2020-12-29'];
  const finalBalance = solution(transactions, dates);
  console.log(finalBalance); 