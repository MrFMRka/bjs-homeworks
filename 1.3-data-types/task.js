"use strict";
  function calculateTotalMortgage(percent, contribution, amount, date) {
      if (isNaN(percent)) {
        return `В строке "Процентная ставка" содержится не верное значение "${percent}"`
      } else if (isNaN(contribution)) {
        return `В строке "Начальный взнос" содержится не верное значение "${contribution}"`
      } else if (isNaN(amount)) {
        return `В строке "Общая стоимость" содержится не верное значение "${amount}"`
      }
      let currentMonth = new Date().getMonth();
      let currentYear = new Date().getFullYear();
      let numberOfYears = date.getFullYear() - currentYear;
      let amountMonth = numberOfYears * 12 - currentMonth + date.getMonth();
      let interestRate = (percent / 100) / 12;
      let loanBody = amount - contribution;
      let monthlyPayment = loanBody * (interestRate + (interestRate / (((1 + interestRate) ** amountMonth) - 1)))
      let totalPayment = (amount + (monthlyPayment * amountMonth - amount)).toFixed(2);    
      console.log(Number(totalPayment));  
      return Number(totalPayment);
    }

  function getGreeting(name) {
      return `Привет, мир! Меня зовут ${(!name || name === 'undefined' || name === 'null') ? 'Аноним' : name}`;
  }