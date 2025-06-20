// TODO: Estudo sobre Keyed Collections.

/*
? Map.
Map é semelhante a um objeto convencional, porém, com alguns adicionais.
Nos mapas as keys podem ser de qualquer tipo primitivo, enquantos os objetos só aceitam 
strings e symbols.
Também é mais prático de pegar o tamanho do objeto utilizando mapas.
*/

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

/*
? Set.
Set é utilizado no lugar de arrays pela sua praticidade, assim como o map.
Set possui um método mais veloz de deletar um elemento pelo seu valor e também
uma verificação de tamanho melhor. Os elementos armazenados são únicos, então evita
repetição, já os duplicados são apagados.
*/

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

/*
? WeakMap.
WeakMap é semelhante ao Map, porém, as chaves devem ser objetos e não primitivos.
O WeakMap mantém uma referência fraca para as chaves. Isso significa que, se não houver mais 
nenhuma referência para o objeto usado como chave, ele pode ser removido da memória pelo garbage 
collector automaticamente, junto com o valor associado. O WeakMap é útil para associar dados a 
objetos sem impedir que eles sejam coletados pelo garbage collector quando não forem mais usados.
*/

const myWeakMap = new WeakMap();
let obj1 = { name: "Lucas" };
let obj2 = { age: 19 };

myWeakMap.set(obj1, "Nome do usuário.");
myWeakMap.set(obj2, "Idade do usuário.");
console.log(myWeakMap.get(obj1));

obj1 = null; // Agora obj1 não tem mais referência, então o garbage collector pode limpar o WeakMap.

console.log(myWeakMap.has(obj1));
console.log(myWeakMap.get(obj1));

/*
? WeakSet.
WeakSet é semelhante ao Set, mas as chaves devem ser objetos e não primitivos.
Assim como o WeakMap, o WeakSet mantém uma referência fraca para os objetos.
Isso significa que, se não houver mais nenhuma referência para o objeto, ele pode ser removido da 
memória pelo garbage collector automaticamente.
O WeakSet é útil para armazenar objetos sem impedir que eles sejam coletados pelo garbage collector 
quando não forem mais usados.
*/

const myWeakSet = new WeakSet();
let obj3 = { name: "Lucas" };
let obj4 = { age: 19 };
myWeakSet.add(obj3); //  { name: "Lucas" }
myWeakSet.add(obj4); //{ age: 19 }
console.log(myWeakSet.has(obj3)); // true
obj3 = null; // Agora obj3 não tem mais referência, então o garbage collector pode limpar o WeakSet.
console.log(myWeakSet.has(obj3)); // false
console.log(myWeakSet.has(obj4)); // true

// O WeakSet não possui métodos como size, clear ou delete, pois é projetado para ser usado com
// objetos e não tem a mesma funcionalidade de gerenciamento de tamanho que o Set.
// O WeakSet é útil para armazenar objetos sem impedir que eles sejam coletados pelo garbage
// collector quando não forem mais usados.
