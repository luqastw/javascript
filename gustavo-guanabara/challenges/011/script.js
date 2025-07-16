function calc_year() {
  const year = document.querySelector("#year_val");
  const error_div = document.querySelector(".error_div");
  const input_div = document.querySelector(".input_div");
  const output_div = document.querySelector(".output_div");

  if (year.value % 4 == 0) {
    input_div.innerHTML = `O ano ${year.value} <b class="green">É BISSEXTO! &#x2705</b>`;
  } else {
    input_div.innerHTML = `O ano ${year.value} <b class="red">NÃO É BISSEXTO! &#x274E</b>`;
  }
}
