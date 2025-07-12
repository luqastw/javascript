function sendproduct() {
  const error_div = document.querySelector(".error_div");
  const input_div = document.querySelector(".input_div");
  const output_div = document.querySelector(".output_div");
  const product = document.querySelector("#product_val");

  if (product.value == 0) {
    error_div.innerHTML = "Erro. Por favor, informe um valor válido.";
  } else {
    error_div.innerHTML = null;
    input_div.innerHTML = null;

    const newPaid = document.createElement("p");
    newPaid.innerHTML = "Informe o valor do produto: ";

    const newInput = document.createElement("input");
    newInput.type = "number";
    newInput.placeholder = " Ex: 3.200";

    const newButton = document.createElement("input");
    newButton.type = "button";
    newButton.value = "Calcular.";
    newButton.addEventListener("click", calc);

    input_div.appendChild(newPaid);
    input_div.appendChild(newInput);
    input_div.appendChild(newButton);

    function getBRL(num) {
      return num.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    }

    function calc() {
      if (newInput.value == 0) {
        error_div.innerHTML = "Erro. Por favor, insira um valor válido.";
      } else {
        error_div.innerHTML = null;
        input_div.innerHTML = null;
        output_div.innerHTML = `Você comprou o produto <b>${product.value}</b> pelo valor de <b>${getBRL(
          Number(newInput.value)
        )}</b> no total.<br>`;
        output_div.innerHTML += `O desconto de 10% equivale a <b>${getBRL(Number(newInput.value * 0.1))}</b>.<br>`;
        output_div.innerHTML += `Aplicando o desconto no produto, o valor a ser pago será de <b>${getBRL(
          Number(newInput.value * 0.9)
        )}</b>.`;
      }
    }
  }
}
