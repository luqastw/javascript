function gerar() {
  let num = document.getElementById("num");
  let tab = document.getElementById("tab");
  let op = document.getElementById("op");

  if (num.value.length == "") {
    op.innerHTML = "[ERRO] Insira um valor.";
  } else {
    let n = Number(num.value);
    tab.innerHTML = "";
    for (let c = 1; c <= 10; c++) {
      let item = document.createElement("option");
      item.text += `${n} . ${c} = ${n * c}`;
      item.value = `tab${c}`;
      tab.appendChild(item);
    }
  }
}

function limp() {
  let num = document.getElementById("num");
  let op = document.getElementById("op");
  let gerar = document.getElementById("gerar");

  num.value = null;
  op.innerHTML = "Digite um valor logo acima.";
  gerar.value = "Gerar Tabuada.";
}
