// plus
document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    //getQuantity() function er output e hocche phone kotota mane phone quantity koto
    const phoneTotalNumber = getQuantity(true, "phone-input");
    const singlePhonePrice = 1219;
    setSingleTotalPrice(phoneTotalNumber, singlePhonePrice, "phone-total");
    setAllTotal();
  });

// minus
document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const phoneTotalNumber = getQuantity(false, "phone-input");
    const singlePhonePrice = 1219;
    setSingleTotalPrice(phoneTotalNumber, singlePhonePrice, "phone-total");
    setAllTotal();
  });
