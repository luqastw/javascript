function makeUser(name, age, blood, number) {
  return {
    name,
    age,
    blood,
    number,
  };
}

let user = makeUser("Lucas", 19, "A+", 99982799948);
console.log(user);
console.log("===================");
console.log("Nome: " + user.name);
console.log("Idade: " + user.age);
console.log("Tipo sanguíneo: " + user.blood);
console.log("Número: " + user.number);
console.log("===================");

// deletando key
delete user.name;

// verificando se a key existe
console.log("Existe name?");
console.log("name" in user);
console.log("===================");

// verificando valor por valor em loop
for (let key in user) {
  console.log(key);
  console.log(user[key]);
}
console.log("===================");

// números inteiros em um objetos são ordenados, como se fosse um .sort()
let codes = {
  77: "Fulano",
  55: "Ciclano",
  22: "Beltrano",
};

// pra burlar essa ordem e apresentá-los em ordem de criação é só colocar um + na frente "+77"
for (let code in codes) {
  console.log(code);
  console.log(codes[code]);
}
