let num_a = document.querySelector("#num_a");
let num_b;
let num_c;

function send_a() {
  const error_div = document.querySelector(".error_div");
  const input_div = document.querySelector(".input_div");
  const output_div = document.querySelector(".output_div");

  function clearError() {
    error_div.innerHTML = null;
  }

  function clearInput() {
    input_div.innerHTML = null;
  }

  function clearOutput() {
    input_div.innerHTML = null;
  }

  function clearAll() {
    clearError(), clearInput(), clearOutput();
  }

  function createPara(txt) {
    const para = document.createElement("p");
    const textNode = document.createTextNode(txt);
    para.appendChild(textNode);
    return para;
  }

  function createInput(typeinp, arg1, arg2) {
    if (typeinp == "button") {
      const funcinput = document.createElement("input");
      funcinput.type = "button";
      funcinput.value = arg1;
      funcinput.addEventListener("click", arg2);
      return funcinput;
    }
    if (typeinp == "number") {
      const num = document.createElement("input");
      num.type = "number";
      num.placeholder = arg1;
      return num;
    } else {
      return clearAll();
    }
  }

  if (num_a.value.length == 0) {
    error_div.innerHTML = "Erro. Por favor, informe um valor válido.";
  } else {
    clearAll();
    input_div.appendChild(createPara("Informe o valor de b:"));
    input_div.appendChild((num_b = createInput("number", " Ex: 4"))).focus();
    input_div.appendChild(createInput("button", "Enviar.", send_b));

    function send_b() {
      if (num_b.value.length == 0) {
        error_div.innerHTML = "Erro. Por favor, informe um valor válido.";
      } else {
        clearAll();
        input_div.appendChild(createPara("Informe o valor de c:"));
        input_div.appendChild((num_c = createInput("number", " Ex: 2"))).focus();
        input_div.appendChild(createInput("button", "Enviar.", send_c));

        function send_c() {
          if (num_c.value.length == 0) {
            error_div.innerHTML = "Erro. Por favor, informe um valor válido.";
          } else {
            clearAll();
            input_div.appendChild(createPara("Confirme seus dados:"));
            input_div.appendChild(createPara(`[ A: ${num_a.value} ] [ B: ${num_b.value} ] [ C: ${num_c.value} ]`));
            input_div.appendChild(createInput("button", "Calcular.", calc));

            function calc() {
              clearAll();

              const delta = Number(num_b.value ** 2) - 4 * Number(num_a.value) * Number(num_c.value);
              output_div.innerHTML = `O valor de ∆ é igual a <b>${delta}</b>.`;
            }
          }
        }
      }
    }
  }
}
