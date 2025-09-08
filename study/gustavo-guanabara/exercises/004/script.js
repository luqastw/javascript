function verif() {
  var pais = document.getElementById("pais");
  var res = document.getElementById("res");
  let but = document.getElementById("but");
  var pais = String(pais.value).toUpperCase();

  but.style.backgroundColor = "rgb(170, 213, 157)";
  but.style.color = "black";
  but.value = "Verificado!";

  if (pais == "") {
    res.innerHTML = "[ERRO]\n Por favor, insira um país.";
    but.value = "Tentar novamente.";
  } else if (pais == "BRASIL") {
    res.innerText = "Você é brasileiro.";
  } else {
    res.innerHTML = "Você é estrangeiro.";
  }
}
