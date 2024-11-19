const area = document.querySelector("main");
const checkBtn = document.getElementById("check");

const ccData = [
  (Card1 = {
    number: 10020031450310,
    name: "Reggie",
    validity: true,
    balance: 12,
    ccType: "Debit",
  }),
  (Card2 = {
    number: 10020031450211,
    name: "Joel",
    validity: false,
    balance: 312,
    ccType: "Debit",
  }),
  (Card3 = {
    number: 10020031450322,
    name: "Emmanuel",
    validity: true,
    balance: 32,
    ccType: "Credit",
  }),
  (Card4 = {
    number: 10020031450333,
    name: "Janet",
    validity: true,
    balance: 31200,
    ccType: "Debit",
  }),
  (Card5 = {
    number: 10020031450343,
    name: "Henry",
    validity: false,
    balance: 1200,
    ccType: "Credit",
  }),
  (Card6 = {
    number: 10020031450223,
    name: "Jacob",
    validity: true,
    balance: 1500,
    ccType: "Debit",
  }),
  (Card7 = {
    number: 10020031450303,
    name: "Graddo",
    validity: true,
    balance: 2000000,
    ccType: "Debit",
  }),
];

checkBtn.addEventListener("click", () => {
  const creditCardNumber = document.getElementById("ccNnumber").value;
  if (creditCardNumber.length === 14) {
    ccData.forEach((card) => {
      console.log(card.name);
      //   if (card.number === creditCardNumber) {
      //     console.log(card.name);
      //   }
    });
  } else {
    const errorPrompt = document.createElement("p");
    errorPrompt.innerText = "Please enter a valid credit card number";
    errorPrompt.classList.add("error");
    area.appendChild(errorPrompt);
  }
});
