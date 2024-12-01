document.addEventListener("DOMContentLoaded", () => {
  const El1 = document.getElementById("1bar");
  const El2 = document.getElementById("2bar");
  const El5 = document.getElementById("5bar");
  const El10 = document.getElementById("10bar");
  const El20 = document.getElementById("20bar");
  const El50 = document.getElementById("50bar");
  const El100 = document.getElementById("100bar");
  const El200 = document.getElementById("200bar");

  const txt1 = document.getElementById("txt1bar");
  const txt2 = document.getElementById("txt2bar");
  const txt5 = document.getElementById("txt5bar");
  const txt10 = document.getElementById("txt10bar");
  const txt20 = document.getElementById("txt20bar");
  const txt50 = document.getElementById("txt50bar");
  const txt100 = document.getElementById("txt100bar");
  const txt200 = document.getElementById("txt200bar");

  const txtFinalCash = document.getElementById("txtfinalCash");
  const txtFinalCashW = document.getElementById("txtfinalCashWords");
  const btnReset = document.getElementById("btnReset");

  const cashInputs = [El1, El2, El5, El10, El20, El50, El100, El200];
  const cashTxt = [txt1, txt2, txt5, txt10, txt20, txt50, txt100, txt200];

  cashInputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      cashCalculate(index);
    });
  });

  function cashCalculate(index) {
    const denominations = [1, 2, 5, 10, 20, 50, 100, 200];
    const rowValue = cashInputs[index].value * denominations[index]; // produces the entered-number *(times) its denominational-value

    cashTxt[index].textContent = rowValue.toFixed(0);
    totalCash();
  }

  function totalCash() {
    let totalCashValue = 0;
    cashTxt.forEach((text) => {
      totalCashValue += parseInt(text.textContent);
    });

    txtFinalCash.textContent = "Total Cash: " + totalCashValue;

    txtFinalCashW.textContent = `Total Cash in words : ${convertToW(
      totalCashValue
    )} Cedis only`;
  }

  btnReset.addEventListener("click", clearData);

  function clearData() {
    cashInputs.forEach((input) => {
      input.value = "";
    });

    cashTxt.forEach((text) => {
      text.textContent = 0;
    });

    totalCash();
  }

  cashInputs.forEach((input) => {
    input.addEventListener("input", () => {
      const value = parseInt(input.value, 10);
      if (isNaN(value) || value < 0) {
        input.value = "";
      }
    });
  });

  function convertToW(number) {
    const units = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ];

    const teens = [
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Ninteen",
    ];

    const tens = [
      " ",
      " ",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninty",
    ];

    let words = "";

    if (number === 0) {
      return "Zero";
    }

    // else if (Math.floor(number / 100) > 0) {
    //   words += convertToW(Math.floor(number / 100)) + " Hundred ";
    //   number %= 100;
    // }s

    //For millions
    if (Math.floor(number / 1000000) > 0) {
      words += convertToW(Math.floor(number / 1000000)) + " Million ";
      number %= 1000000;
    }

    // For thousands
    if (Math.floor(number / 1000) > 0 && number % 1000 > 0) {
      words += convertToW(Math.floor(number / 1000)) + " Thousand , ";
      number %= 1000;
      if (number % 1000 < 100) {
        words += " and ";
      }
    } else if (Math.floor(number / 1000) > 0) {
      words += convertToW(Math.floor(number / 1000)) + " Thousand ";
      number %= 1000;
    }

    // For hundreds
    if (Math.floor(number / 100) > 0 && number % 100 > 0) {
      words += convertToW(Math.floor(number / 100)) + " Hundred and ";
      number %= 100;
    } else if (Math.floor(number / 100) > 0) {
      words += convertToW(Math.floor(number / 100)) + " Hundred ";
      number %= 100;
    }

    if (number > 0) {
      if (number < 10) {
        words += units[number];
      } else if (number < 20) {
        words += teens[number - 10];
      } else {
        words += tens[Math.floor(number / 10)];
        if (number % 10 > 0) {
          words += " " + units[number % 10];
        }
      }
    }
    return words;
  }
});
