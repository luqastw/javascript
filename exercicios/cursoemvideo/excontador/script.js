function calc() {
  let ini = document.getElementById("ini");
  let fim = document.getElementById("fim");
  let pas = document.getElementById("pas");

  let calc = document.getElementById("calc");
  let limp = document.getElementById("limp");
  let res = document.getElementById("res");

  if (
    ini.value.length == "" ||
    fim.value.length == "" ||
    pas.value.length == ""
  ) {
    res.innerHTML = "<strong>[ERRO]</strong> Estão faltando dados.";
  } else {
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(pas.value);
    res.innerText = "O resultado da contagem é:\n";

    for (let c = i; c <= f; c += p) {
      res.innerHTML += `${c} `;
    }
    if (i > f) {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} `;
      }
    }
  }
}
function limp() {
  let ini = document.getElementById("ini");
  let fim = document.getElementById("fim");
  let pas = document.getElementById("pas");

  let calc = document.getElementById("calc");
  let limp = document.getElementById("limp");
  let res = document.getElementById("res");

  ini.value = "";
  fim.value = "";
  pas.value = "";
  res.innerHTML = "";
}
