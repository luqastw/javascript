// Estudo sobre Keyed Colections.

// Map é semelhante a um objeto convencional, porém, com alguns adicionais.
// Nos mapas as keys podem ser de qualquer tipo primitivo, enquantos os objetos só aceitam
// strings e symbols.
// Também é mais prático de pegar o tamanho do objeto utilizando mapas.
const myMap = new Map();

myMap.set("lucas", 19); // [key, value]
myMap.set("fulano", 21);
myMap.set("ciclano", 24);
console.log(myMap); // {lucas: 19, fulano: 21, ciclano: 24}
console.log(myMap.get("lucas")); // get = pega o valor da chave.
console.log(myMap.size); // 3

myMap.delete("fulano");
console.log(myMap); // {lucas: 19, ciclano: 24}
console.log(myMap.size); // 2

// Set é utilizado no lugar de arrays pela sua praticidade, assim como o map.
// Set possui um método mais veloz de deletar um elemento pelo seu valor e também
// uma verificação de tamanho melhor. Os elementos armazenados são únicos, então evita
// repetição, já os duplicados são apagados.
const mySet = new Set();
mySet.add(1); // [value]
mySet.add(2);
mySet.add(3);
mySet.add(3); // elemento duplicado apagado.
console.log(mySet); // {1, 2, 3}
console.log(mySet.has(3)); // true
mySet.delete(3); // removendo o valor 3.
console.log(mySet); // {1, 2}
console.log(mySet.has(3)); // false

mySet.add("lucas");
mySet.add("lucas"); // elemento duplicado apagado.
mySet.add("FULANO");
console.log(mySet); // {1, 2, "lucas", "FULANO"}
console.log(mySet.has("LuCaS".toLowerCase())); // LuCaS -> lucas = true
console.log(mySet.has("Fulano".toUpperCase())); // Fulano -> FULANO = true

// mySet.clear(); o clear também funciona em Set.
console.log(mySet);
console.log(mySet.size); // 4

// WeakMap e WeakSet em breve.
