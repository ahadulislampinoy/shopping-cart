//! Quantity
function getQuantity(quantityIncrease, inputId) {
  const inputElement = document.getElementById(inputId);
  const inputValue = parseInt(inputElement.value);
  // quantityIncrease true hoile 1 kore barbe ar jodi true na hoy orthath false hoy thle 1 kore kombe, ekhn plus button e click korle jehetu 1 barbe tai function call korar somoy true hobe bole dibo ar minus e false bole dibi
  let quantityTotal;
  if (quantityIncrease === true) {
    quantityTotal = inputValue + 1;
  } else {
    quantityTotal = inputValue - 1;
  }

  inputElement.value = quantityTotal;
  return quantityTotal;
}

// ! Single Item Total Price
function setSingleTotalPrice(quantityTotal, singlePrice, totalId) {
  const singleTotalPrice = quantityTotal * singlePrice;
  const totalElement = document.getElementById(totalId);
  totalElement.innerText = singleTotalPrice;
  return singleTotalPrice;
}

// ! Sub-Total Price
//  getting single item price number
function singleTotalAmount(singleTotalId) {
  const singleTotalElement = document.getElementById(singleTotalId);
  const singleTotalAmount = parseInt(singleTotalElement.innerText);
  return singleTotalAmount;
}

// common function for set new value
function setElement(elementId, newValue) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = newValue;
}

//  sub-total, tax, final-total calculation
function setAllTotal() {
  // 1.sub total
  const phoneTotalPrice = singleTotalAmount("phone-total");
  const caseTotalPrice = singleTotalAmount("case-total");
  const subTotal = phoneTotalPrice + caseTotalPrice;
  setElement("sub-total", subTotal);
  // 2. tax
  const taxCalculation = subTotal * 0.1; // 0.1 mane hosse 10%
  const tax = parseFloat(taxCalculation.toFixed(2));
  setElement("tax-amount", tax);
  // 3. final total
  const finalTotal = subTotal + tax;
  setElement("final-total", finalTotal);
}
