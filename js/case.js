// plus
document.getElementById("btn-case-plus").addEventListener("click", function () {
  //getQuantity() function er output e hocche case kotota mane case quantity koto
  const caseTotalNumber = getQuantity(true, "case-input");
  const singleCasePrice = 59;
  setSingleTotalPrice(caseTotalNumber, singleCasePrice, "case-total");
  setAllTotal();
});

// minus
document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const caseTotalNumber = getQuantity(false, "case-input");
    const singleCasePrice = 59;
    setSingleTotalPrice(caseTotalNumber, singleCasePrice, "case-total");
    setAllTotal();
  });
