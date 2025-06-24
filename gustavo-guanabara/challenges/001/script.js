const botao1 = document.querySelector("#but1");
const botao2 = document.querySelector("#but2");
const botao3 = document.querySelector("#but3");
const res = document.querySelector(".res");

function click1(){
    res.classList.add('resshow');
    const newP = document.createElement('p');
    const newContent = document.createTextNode("Você clicou no primeiro botão.");
    newP.appendChild(newContent);
    res.innerHTML = null;
    res.appendChild(newP);
}

function click2(){
    res.classList.add('resshow');
    const newP = document.createElement('p');
    const newContent = document.createTextNode("Você clicou no segundo botão.")
    newP.appendChild(newContent);
    res.innerHTML = null;
    res.appendChild(newP);
}

function click3(){
    res.classList.add('resshow');
    const newP = document.createElement('p');
    const newContent = document.createTextNode('Você clicou no terceiro botão.');
    newP.appendChild(newContent);
    res.innerHTML = null;
    res.appendChild(newP);
}