// Estudo sobre Stack.

// unidade do stack que vai ser adicionado a pilha.
// será o topo.
class StackNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// criação da pilha com nada no topo e tamanho 0
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // função push que cria um novo node.
  // se o tamanho for 0, define como o topo.
  // se não, cria e armazena como pushedNode.
  // o próximo node cadastrado vai passar a valer o topo
  // e o topo o novo node, no caso pushedNode.
  push(val) {
    if (this.size === 0) {
      this.top = new StackNode(val);
    } else {
      const pushedNode = new StackNode(val);
      pushedNode.next = this.top;
      this.top = pushedNode;
    }

    // incremento do tamanho da pilha
    this.size++;
  }

  // função pop. se o tamanho da pilha for 0, nada acontece.
  // se não, o topo vai ser armazenado como poppedNode e
  // irá passar a valer top next, que é o próximo valor na pilha.
  // o tamanho da pilha diminui e é retornado o valor do poppedNode.
  pop() {
    if (this.size === 0) return null;
    const poppedNode = this.top;
    this.top = this.top.next;
    this.size--;
    return poppedNode.val;
  }

  // pega o valor do topo.
  // this => vai ser o Stack();
  // top => vai ser o new stackNode();
  // val => vai ser o valor do stackNode.
  getTop() {
    return this.top.val;
  }
}

// execução do stack, criando uma nova pilha executando push e pop.
const myStack = new Stack(); // criou uma pilha nova.
myStack.push("a");
myStack.push("b");
myStack.push("c");
console.log(myStack.size);
console.log(myStack.getTop()); // chamou a função de pegar o valor do topo.
myStack.pop(); // removeu c
console.log(myStack.getTop()); // chamou a função de pegar o valor do topo.
myStack.pop(); // removeu b
console.log(myStack.getTop()); // chamou a função de pegar o valor do topo.
myStack.pop(); // removeu a
console.log(myStack.top); // o topo será nulo.
console.log(myStack.size); // após os pops, o tamanho da pilha vai voltar a ser 0.
