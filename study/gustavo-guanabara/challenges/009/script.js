function sendname() {
  const name = document.querySelector("#func_name");
  const error_div = document.querySelector(".error_div");
  const input_div = document.querySelector(".input_div");
  const output_div = document.querySelector(".output_div");

  if (name.value == 0) {
    error_div.innerHTML = "Erro. Por favor, informe um nome válido.";
  } else {
    error_div.innerHTML = null;
    input_div.innerHTML = null;

    const askSalary = document.createElement("p");
    askSalary.innerHTML = "Informe o valor do funcionário:";

    const salary = document.createElement("input");
    salary.type = "number";
    salary.placeholder = " Ex: 1.500";

    const buttonSalary = document.createElement("input");
    buttonSalary.type = "button";
    buttonSalary.value = "Enviar.";
    buttonSalary.addEventListener("click", sendSalary);

    input_div.appendChild(askSalary);
    input_div.appendChild(salary);
    input_div.appendChild(buttonSalary);

    function sendSalary() {
      if (salary.value == 0) {
        error_div.innerHTML = "Erro. Informe um valor válido.";
      } else {
        error_div.innerHTML = null;
        input_div.innerHTML = null;

        const askIncrease = document.createElement("p");
        askIncrease.innerHTML = "Informe a porcentagem do reajuste de salário:";

        const increase = document.createElement("input");
        increase.type = "number";
        increase.placeholder = " Ex: 18%";

        const buttonIncrease = document.createElement("input");
        buttonIncrease.type = "button";
        buttonIncrease.value = "Calcular.";
        buttonIncrease.addEventListener("click", sendIncrease);

        input_div.appendChild(askIncrease);
        input_div.appendChild(increase);
        input_div.appendChild(buttonIncrease);

        function sendIncrease() {
          if (increase.value == 0) {
            error_div.innerHTML = "Erro. Informe um valor válido.";
          } else {
            error_div.innerHTML = null;
            input_div.innerHTML = null;

            function getBRL(num) {
              return num.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              });
            }

            output_div.innerHTML = `O salário inicial de <b>${
              name.value
            }</b> é de <b>${getBRL(Number(salary.value))}</b>.<br>`;
            output_div.innerHTML += `O reajuste de <b>${
              increase.value
            }%</b> equivale a <b>${getBRL(
              Number(salary.value * (increase.value / 100))
            )}</b> para o funcionário.<br>`;
            output_div.innerHTML += `Com isso, <b>${
              name.value
            }</b> passará a receber <b>${getBRL(
              Number(salary.value * (increase.value / 100 + 1))
            )}</b>.`;
          }
        }
      }
    }
  }
}
