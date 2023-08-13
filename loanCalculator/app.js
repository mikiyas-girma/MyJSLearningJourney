

// UI vars
const calculate = document.querySelector('#loan-form');

const loan = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');

const monthlyPayment = document.querySelector('#monthly-payment');
const totalPayment = document.querySelector('#total-payment');
const totalInterest = document.querySelector('#total-interest');



calculate.addEventListener('submit', calculateLoan);


// implementation for the calculator

function calculateLoan(e) {

  // now calculating by using formula

  const principal = parseFloat(loan.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  monthlyPayment.value = monthly.toFixed(2);
  totalPayment.value = (monthly * calculatedPayments).toFixed(2);
  totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
 
e.preventDefault();
}


