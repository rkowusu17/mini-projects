const area = document.querySelector("main");
const checkBtn = document.getElementById("check");

const ccData = [
  (Card1 = {
    number: 10020031450310,
    name: "Reggie",
    validity: true,
    balance: 12,
    ccType: "Debit",
    pin: 233,
  }),
  (Card2 = {
    number: 10020031450211,
    name: "Joel",
    validity: false,
    balance: 312,
    ccType: "Debit",
    pin: 201,
  }),
  (Card3 = {
    number: 10020031450322,
    name: "Emmanuel",
    validity: true,
    balance: 32,
    ccType: "Credit",
    pin: 301,
  }),
  (Card4 = {
    number: 10020031450333,
    name: "Janet",
    validity: true,
    balance: 31200,
    ccType: "Debit",
    pin: 205,
  }),
  (Card5 = {
    number: 10020031450343,
    name: "Henry",
    validity: false,
    balance: 1200,
    ccType: "Credit",
    pin: 222,
  }),
  (Card6 = {
    number: 10020031450223,
    name: "Jacob",
    validity: true,
    balance: 1500,
    ccType: "Debit",
    pin: 245,
  }),
  (Card7 = {
    number: 10020031450303,
    name: "Graddo",
    validity: true,
    balance: 2000000,
    ccType: "Debit",
    pin: 175,
  }),
];

//  add a validation checker the run it through the data

checkBtn.addEventListener("click", validation);
document.getElementById("ccPin").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    validation();
  }
});

function validation() {
  const creditCardNumber = document.getElementById("ccNnumber").value;
  const pinNumber = document.getElementById("ccPin").value;
  const output = document.querySelector(".results");
  if (creditCardNumber.length === 14 && pinNumber.length === 3) {
    ccData.forEach((card) => {
      if (creditCardNumber == card.number && pinNumber == card.pin) {
        output.innerHTML = ` <p> ${card.name} is the name of the credit card holder </p>  
       <p> The card balance is : $ ${card.balance} </p>
      <p>  The card type is : ${card.ccType} </p>`;
        output.style.color = "green";
      } else if (creditCardNumber == card.number && pinNumber != card.pin) {
        output.innerHTML = `Please enter the corresponding pin`;
        output.style.color = "red";
      }
    });
  } else {
    // const errorPrompt = document.createElement("p");
    output.innerText =
      "Please enter a valid credit card number and correct pin";
    output.classList.add("error");
    area.appendChild(output);
  }
}
