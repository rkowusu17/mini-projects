function calculateTip() {
  const billAmountEl = document.getElementById("billAmount");
  const serviceRatingSelect = document.getElementById("serviceRating");
  const splitCountEl = document.getElementById("splitCount");
  const mealTypeEl = document.getElementById("mealType");

  const tipAmountEl = document.getElementById("tipAmount");
  const totalAmountEl = document.getElementById("totalAmount");
  const amountPerPersonEl = document.getElementById("amountPerPerson");

  const billAmount = parseFloat(billAmountEl.value);
  const serviceRating = parseFloat(serviceRatingSelect.value);
  const splitCount = parseFloat(splitCountEl.value);
  const mealType = mealTypeEl.value;

  if (isNaN(billAmount) || isNaN(serviceRating) || isNaN(splitCount)) {
    tipAmountEl.innerHTML = `<p style =" color: red ; font-size: 25px ; text-align:center"> 
      Please fill the various fields 
      </p>`;
    totalAmountEl.textContent = "";
    amountPerPersonEl.textContent = "";
    return;
  }

  let tip;
  switch (serviceRating) {
    case 1:
      tip = billAmount * 0.05;
      break;
    case 2:
      tip = billAmount * 0.1;
      break;
    case 3:
      tip = billAmount * 0.15;
      break;
    case 4:
      tip = billAmount * 0.2;
      break;
  }

  let totalAmount = billAmount + tip;
  let amountPerPerson = totalAmount / splitCount;

  if (mealType === "dinner") {
    tip += 5;
    totalAmount += 5;
    amountPerPerson += 5;
  }

  tipAmountEl.textContent = `Tip : $${tip.toFixed(2)}`;
  totalAmountEl.textContent = `Total Amount : $${totalAmount.toFixed(2)}`;
  amountPerPersonEl.textContent = `Amount Per person : $${amountPerPerson.toFixed(
    2
  )}`;
}

document.getElementById("calculateBtn").addEventListener("click", calculateTip);
