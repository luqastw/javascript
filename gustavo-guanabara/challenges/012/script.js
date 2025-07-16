function start() {
  let oldValue;
  let newValue;
  const ERROR_DIV = document.querySelector(".ERROR_DIV");
  const INPUT_DIV = document.querySelector(".INPUT_DIV");
  const OUTPUT_DIV = document.querySelector(".OUTPUT_DIV");

  function clearAll() {
    ERROR_DIV.innerHTML = null;
    INPUT_DIV.innerHTML = null;
    OUTPUT_DIV.innerHTML = null;
  }

  clearAll();

  const askOldValue = document.createElement("p");
  askOldValue.innerHTML = "Informe o valor antigo do produto:";

  const newNumber = document.createElement("input");
  newNumber.type = "number";
  newNumber.placeholder = " Ex: 125";

  const newButton = document.createElement("input");
  newButton.type = "button";
  newButton.value = "Enviar.";
  newButton.addEventListener("click", sendOldValue);

  INPUT_DIV.appendChild(askOldValue);
  INPUT_DIV.appendChild((oldValue = newNumber));
  INPUT_DIV.appendChild(newButton);

  function sendOldValue() {
    if (oldValue.value == 0 || oldValue.value < 0) {
      ERROR_DIV.innerHTML = "Erro. Por favor, informe um valor válido.";
    } else {
      clearAll();

      const askNewValue = document.createElement("p");
      askNewValue.innerHTML = "Informe o novo valor do produto:";

      const newNumber = document.createElement("input");
      newNumber.type = "number";
      newNumber.placeholder = " Ex: 132";

      const newButton = document.createElement("input");
      newButton.type = "button";
      newButton.value = "Enviar.";
      newButton.addEventListener("click", sendNewValue);

      INPUT_DIV.appendChild(askNewValue);
      INPUT_DIV.appendChild((newValue = newNumber));
      INPUT_DIV.appendChild(newButton);

      function sendNewValue() {
        if (newValue.value == 0 || newValue.value < 0) {
          ERROR_DIV.innerHTML = "Erro. Por favor, informe um valor válido.";
        } else {
          clearAll();

          OUTPUT_DIV.innerHTML = "Analisando os valores informados...<br><br>";

          function getBRL(num) {
            return num.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
          }

          setTimeout(() => {
            OUTPUT_DIV.innerHTML += `O produto custava ${getBRL(Number(oldValue.value))} e agora custa ${getBRL(Number(newValue.value))}.<br>`;

            if (Number(newValue.value) == Number(oldValue.value)) {
              OUTPUT_DIV.innerHTML += `O preço se mantém o mesmo, sem aumento ou redução.`;
            } else {
              if (Number(newValue.value) > Number(oldValue.value)) {
                OUTPUT_DIV.innerHTML += `Hoje o produto está <b>mais caro</b>.<br>`;
                OUTPUT_DIV.innerHTML += `O preço subiu <b>${getBRL(Number(newValue.value - oldValue.value))}</b> em relação ao preço anterior.<br>`;
                OUTPUT_DIV.innerHTML += `Uma variação de <b>${Number(((newValue.value - oldValue.value) / oldValue.value) * 100).toFixed(2) * 1}%</b> para cima.`;
              } else {
                OUTPUT_DIV.innerHTML += `Hoje o produto está <b>mais barato</b>.<br>`;
                OUTPUT_DIV.innerHTML += `O preço caiu <b>${getBRL(Number(oldValue.value - newValue.value))}</b> em relação ao preço anterior.<br>`;
                OUTPUT_DIV.innerHTML += `Uma variação de <b>${Number(((newValue.value - oldValue.value) / oldValue.value) * 100).toFixed(2) * -1}%</b> para baixo.`;
              }
            }
          }, 3000);
        }
      }
    }
  }
}
