function init() {
  let name;
  let N1;
  let N2;
  const ERROR_DIV = document.querySelector(".ERROR_DIV");
  const INPUT_DIV = document.querySelector(".INPUT_DIV");
  const OUTPUT_DIV = document.querySelector(".OUTPUT_DIV");

  function clearAll() {
    ERROR_DIV.innerHTML = null;
    INPUT_DIV.innerHTML = null;
    OUTPUT_DIV.innerHTML = null;
  }

  function calcMed(N1, N2) {
    const medium = (Number(N1.value) + Number(N2.value)) / 2;

    clearAll();
    if (Number(medium.toFixed(2)) < 3) {
      OUTPUT_DIV.innerHTML = `Analisando a situação de ${name.value}...<br><br>`;
      OUTPUT_DIV.innerHTML += `Com as notas ${Number(N1.value)} e ${Number(N2.value)}, a média é ${Number(medium)}.<br>`;
      OUTPUT_DIV.innerHTML += `Com a média abaixo de 3.0 o aluno está <b class = "red">REPROVADO</b>.`;
    } else if (medium < 6) {
      OUTPUT_DIV.innerHTML = `Analisando a situação de ${name.value}...<br><br>`;
      OUTPUT_DIV.innerHTML += `Com as notas ${Number(N1.value)} e ${Number(N2.value)}, a média é ${Number(medium)}.<br>`;
      OUTPUT_DIV.innerHTML += `Com a média acima de 3.0 e abaixo de 6.0 o aluno está em <b class = "orange">RECUPERAÇÂO</b>.`;
    } else {
      OUTPUT_DIV.innerHTML = `Analisando a situação de ${name.value}...<br><br>`;
      OUTPUT_DIV.innerHTML += `Com as notas ${Number(N1.value)} e ${Number(N2.value)}, a média é ${Number(medium)}.<br>`;
      OUTPUT_DIV.innerHTML += `Com a média acima de 6.0 o aluno está <b class = "green">APROVADO</b>.`;
    }
  }

  clearAll();

  const askName = document.createElement("p");
  askName.innerHTML = "Qual o nome do aluno?";

  const newText = document.createElement("input");
  newText.type = "text";
  newText.placeholder = " Ex: Lucas";

  const newButton = document.createElement("input");
  newButton.type = "button";
  newButton.value = "Enviar.";
  newButton.addEventListener("click", sendName);

  INPUT_DIV.appendChild(askName);
  INPUT_DIV.appendChild((name = newText));
  INPUT_DIV.appendChild(newButton);

  function sendName() {
    if (name.value == 0) {
      ERROR_DIV.innerHTML = "Erro. Por favor, informe um nome válido.";
    } else {
      clearAll();

      const askN1 = document.createElement("p");
      askN1.innerHTML = `A primeira nota de ${name.value} é:`;

      const newNumber = document.createElement("input");
      newNumber.type = "number";
      newNumber.placeholder = " Ex: 8.5";

      const newButton = document.createElement("input");
      newButton.type = "button";
      newButton.value = "Enviar.";
      newButton.addEventListener("click", sendN1);

      INPUT_DIV.appendChild(askN1);
      INPUT_DIV.appendChild((N1 = newNumber));
      INPUT_DIV.appendChild(newButton);

      function sendN1() {
        if (0 > N1.value || N1.value > 10 || N1.value == "") {
          ERROR_DIV.innerHTML = "Erro. Por favor, informe uma nota entre 0 e 10.";
        } else {
          clearAll();

          const askN2 = document.createElement("p");
          askN2.innerHTML = `A segunda nota de ${name.value} é:`;

          const newNumber = document.createElement("input");
          newNumber.type = "number";
          newNumber.placeholder = " Ex: 7";

          const newButton = document.createElement("input");
          newButton.type = "button";
          newButton.value = "Enviar.";
          newButton.addEventListener("click", sendN2);

          INPUT_DIV.appendChild(askN2);
          INPUT_DIV.appendChild((N2 = newNumber));
          INPUT_DIV.appendChild(newButton);

          function sendN2() {
            if (0 > N2.value || N2.value > 10 || N2.value == "") {
              ERROR_DIV.innerHTML = "Erro. Por favor, informe uma nota entre 0 e 10.";
            } else {
              calcMed(N1, N2);
            }
          }
        }
      }
    }
  }
}
