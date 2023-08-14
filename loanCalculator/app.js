

// UI vars
const calculate = document.querySelector('#loan-form');

const loan = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');

const monthlyPayment = document.querySelector('#monthly-payment');
const totalPayment = document.querySelector('#total-payment');
const totalInterest = document.querySelector('#total-interest');

const results = document.getElementById('results');
const loading = document.getElementById('loading');

loading.style.display = "none";
results.style.display = "none";


calculate.addEventListener('submit', calculateLoan);


// implementation for the calculator

function calculateLoan(e) {
 // hiding always when calculate buttom is clicked 
  results.style.display = "none";

  // now calculating by using formula

  const principal = parseFloat(loan.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)) {
  monthlyPayment.value = monthly.toFixed(2);
  totalPayment.value = (monthly * calculatedPayments).toFixed(2);
  totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

  showResults();

  } else {
    showError('please check your numbers');
  }

e.preventDefault();
}

// show results function 

function showResults() {
 loading.style.display = "inline-block";
 setTimeout(() => {
    loading.style.display = "none";
    results.style.display = "inline-block";
  }, 2000);

}

// show error function

function showError(error) {
  const errorDiv = document.createElement('div');
  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode(error));

  // lets get parent elements in which we insert this div
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  card.insertBefore(errorDiv, heading);

  // now lets give time to remove the errorDiv
  setTimeout(removeAlert, 2000);

}

// time out handler function

function removeAlert() {
  document.querySelector('.alert').remove();
}

