// Estudo sobre Recursion.

// reduz a escala do problema em seções menores, partindo sempre de uma base
// pra enfim chegar a um resultado. é utilizado geralmente em cenários onde
// há um problema em que existe instâncias menores do mesmo problema.

// base case é a menor instância do problema, onde é facilmente resolvido.
// recursive case é a instância que diminui o problema até o base case.

// começando pelo básico, apenas para aprender o fundamento.
// resolvendo o cálculo de fatorial usando recursive case.

const fatorial = (n) => {
  if (n === 1) return 1; // 1 será o BASE CASE para passar assim pro recursive case.

  return n * fatorial(n - 1);
};

console.log(fatorial(5)); // 120
