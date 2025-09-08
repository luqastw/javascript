function setdol() {
  const newUSD = document.querySelector("#dol_val");
  const error_div = document.querySelector(".error_div");
  const input_div = document.querySelector(".input_div");
  const output_div = document.querySelector(".output_div");

  if (newUSD.value.length == 0) {
    error_div.innerHTML = "Erro. Por favor, informe um valor válido.";
  } else {
    error_div.innerHTML = null;

    input_div.innerHTML = null;
    const newP = document.createElement("p");
    newP.innerHTML = "Informe o seu valor na carteira em BRL:";

    const newBRL = document.createElement("input");
    newBRL.type = "number";
    newBRL.placeholder = " Ex: 200";
    newBRL.id = "brl";

    const newButton = document.createElement("input");
    newButton.type = "button";
    newButton.value = "Converter.";
    newButton.addEventListener("click", convert);

    function getUSD(num) {
      return num.toLocaleString("en-US", { style: "currency", currency: "USD" });
    }

    function getBRL(num) {
      return num.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    }

    function convert() {
      input_div.innerHTML = null;
      output_div.innerHTML = `${getBRL(Number(newBRL.value))} equivalem a ${getUSD(
        Number(newBRL.value) / Number(newUSD.value)
      )} pela conversão solicitada.`;
    }

    input_div.appendChild(newP);
    input_div.appendChild(newBRL);
    input_div.appendChild(newButton);
  }
}
