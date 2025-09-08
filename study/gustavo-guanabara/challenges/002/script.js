function send() {
  const name = document.querySelector("#name");
  const age = document.querySelector("#age");
  const preview = document.querySelector(".preview");
  const out = document.querySelector(".out");

  if (
    name.value.length !== 0 &&
    age.length !== 0 &&
    200 > age.value &&
    age.value > 0
  ) {
    preview.classList.add("previewshow");
    out.classList.remove("outshow");
    preview.innerHTML = `<p>Boas-vindas, novo usuário!<br>Seu nome é <strong>${name.value}</strong> e você tem <strong>${age.value} anos</strong>.</p>`;
    out.innerHTML = null;
  } else {
    out.classList.add("outshow");
    if (age.value == 0 || name == undefined) {
      out.innerHTML =
        "<p><strong>[ERRO]</strong><br>Insira valores válidos.</p>";
    } else if (age.value >= 200) {
      out.innerHTML = "<p><strong>[ERRO]</strong><br>Vampiros não existem.</p>";
    } else if (age.value < 0) {
      out.innerHTML =
        "<p><strong>[ERRO]</strong><br>Eu tenho certeza que você já nasceu.</p>";
    }
  }
}
