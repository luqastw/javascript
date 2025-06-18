// Estudo sobre Queue.

// unidade do queue.
// será o valor do front.
class QueueNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// criação da queue, sem parâmetros e com tamanho 0.
// front e back serão null por não ter nenhum valor.
class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  // função enqueue, pra adicionar um node ao queue.
  // se o tamanho for 0, tanto o front quanto o back serão o node adicionado.
  // se já houver elementos, o próximo valor e o back será o newNode.
  enqueue(val) {
    const newNode = new QueueNode(val);
    if (this.size === 0) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    // incremento no tamanho da queue.
    this.size++;
  }

  // função dequeue para remover um elemento da frente.
  // se o tamanho já for 0, nada acontece.
  // o front vai ser o removedNode.
  // se o tamanho for 1, o valor de trás será null por não haver nada atrás.
  dequeue() {
    if (this.size === 0) return null;

    const removedNode = this.front;

    if (this.size === 1) {
      this.back = null;
    }

    // o valor de front passará a ser o próximo valor, removendo o atual.
    // o tamanho da queue diminui.
    this.front = this.front.next;
    this.size--;
    return removedNode.val;
  }
}

// criando nova queue.
const myQueue = new Queue();

myQueue.enqueue("a"); // adicionando elementos a queue.
myQueue.enqueue("b");
myQueue.enqueue("c");
myQueue.dequeue();  // removendo elementos da queue.
myQueue.dequeue();
myQueue.dequeue();

// todos os elementos foram removidos, então tanto o front quanto o back será null.

console.log(myQueue.size); // 0
console.log(myQueue.front); // null
console.log(myQueue.back); // null

myQueue.enqueue("d"); // adicionando mais um elemento com a queue vazia.
console.log(myQueue.front.val); // valor da frente = d
myQueue.dequeue(); // removendo elemento front.
console.log(myQueue.dequeue()); // null