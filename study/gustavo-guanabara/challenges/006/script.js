function convert() {
  const celcius = document.querySelector("#celciusval");
  const error_div = document.querySelector("#error_div");
  const output_div = document.querySelector(".output_div");

  if (celcius.value.length == 0) {
    error_div.classList.add("error_div");
    error_div.innerHTML = "Erro. Por favor, informe um valor válido.";
  } else {
    const fahrenheit = Number(celcius.value) * 1.8 + 32;
    const kelvin = Number(celcius.value) + 273.15;

    error_div.innerHTML = null;
    error_div.classList.remove("error_div");
    output_div.innerText = `O valor de ${Number(celcius.value)}°C será...\n`;
    output_div.innerText += `${fahrenheit.toFixed(2)}°F em Fahrenheit;\n`;
    output_div.innerText += `${kelvin.toFixed(2)}°K em Kelvin.`;
  }
}
