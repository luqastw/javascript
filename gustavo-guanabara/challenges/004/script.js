function calc() {
  const errorwindow = document.querySelector(".errorwindow");
  const preview = document.querySelector(".preview");
  const product = document.querySelector("#product");

  const val = document.querySelector("#val");
  const paid = document.querySelector("#paid");
  const valbr = Number(val.value);
  const paidbr = Number(paid.value);
  const remain = val.value - paid.value;
  const change = paid.value - val.value;

  function getBRL(num) {
    return num.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
  }

  if (product.value.length == 0 || val.value.length == 0 || paid.value.length == 0) {
    errorwindow.innerHTML = "Por favor, informe valores válidos.";
    errorwindow.classList.add("showError");
  } else {
    errorwindow.classList.remove("showError")
    errorwindow.innerHTML = null;
    preview.innerHTML = null;
    if (paid.value < val.value) {
      preview.innerHTML = "O valor pago é insuficiente para comprar o seu produto.<br>";
      preview.innerHTML += `Ainda restam <strong>${getBRL(remain)}</strong>.`;
    } else {
      preview.innerHTML = `Você comprou o produto "${product.value}" 
      pelo valor de <strong>${getBRL(valbr)}</strong>.<br>`;
      preview.innerHTML += `Pagando com <strong>${getBRL(paidbr)}</strong> o seu troco será de <strong>${getBRL(change)}</strong>.`;
    }
  }
}
