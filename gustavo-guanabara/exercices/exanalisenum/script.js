let val = [];
function add() {
  let num = document.getElementById("num");
  let res = document.getElementById("res");
  let cont = document.getElementById("cont");

  function isNum(n) {
    if (n <= 100 && n >= 1) {
      return true;
    } else {
      return false;
    }
  }

  function inList(n, v) {
    if (v.indexOf(Number(n)) != -1) {
      return true;
    } else {
      return false;
    }
  }

  if (isNum(num.value) && !inList(num.value, val)) {
    val.push(Number(num.value));
    let tot = val.length;

    res.innerHTML = "";
    res.innerHTML += `Número ${num.value} adicionado.<br>`;

    cont.innerHTML = "";
    cont.innerHTML += `Números adicionados: ${tot}`;
    num.focus();
  } else {
    res.innerHTML =
      "<strong>[ERRO]</strong><br>Valor inválido ou já existente.";
    num.focus();
  }
}

function limp() {
  val = [];
  num.value = null;
  cont.innerHTML = "<p>Insira um valor válido de 1 até 100.";
  res.innerHTML = "<p>Digite acima os números que deseja analisar.</p>";
}

function fim() {
  if (val.length == 0) {
    res.innerHTML = "Adicione valores válidos antes de finalizar.";
    num.focus();
  } else {
    val.sort();
    let menor = val[0];
    let maior = val[val.length - 1];
    let soma = 0;
    let tot = val.length;
    for (let pos in val) {
      soma += val[pos];
    }

    let media = soma / tot;
    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo, temos um total de ${tot} números cadastrados.</p>`;
    res.innerHTML += `<p>O menor valor cadastrado foi ${menor}.</p>`;
    res.innerHTML += `<p>O maior valor cadastrado foi ${maior}.</p>`;
    res.innerHTML += `<p>A soma de todos o valores cadastrados é ${soma}.</p>`;
    res.innerHTML += `<p>A média de todos os valores cadastrados é ${media}</p>`;
    cont.innerHTML = "";
  }
}
