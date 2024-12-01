const CalcBtn = document.getElementById("calculateBtn");
const results = document.getElementById("result");

CalcBtn.addEventListener("click", calculateLoan);

function calculateLoan() {
  const loanAmount = parseInt(document.getElementById("amountInput").value);
  const InterestRate = parseInt(
    document.getElementById("interestRateInput").value
  );
  const loanTerm = parseInt(document.getElementById("loanTermInput").value);

  if (isNaN(loanAmount) || isNaN(InterestRate) || isNaN(loanTerm)) {
    results.innerHTML = `<p>Please enter valid number values in all the fields </p>`;
  } else {
    const monthlyInterest = InterestRate / 100 / 12;
    const totalPayment = loanTerm;
    const monthlyPayment =
      (loanAmount * monthlyInterest) /
      (1 - Math.pow(1 + monthlyInterest, -totalPayment));
    const totalInterest = monthlyPayment * totalPayment - loanAmount;

    displayResults(monthlyPayment, totalInterest);
  }
}
function displayResults(monthlyPayment, totalInterest) {
  results.innerHTML = ` 
    <p> <strong>Monthly payment : ${monthlyPayment.toFixed(2)}</strong> </p>
    <p> <strong>Total Interest : ${totalInterest.toFixed(2)}</strong> </p>
    `;
}
