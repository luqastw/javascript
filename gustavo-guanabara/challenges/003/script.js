function send(){
    const num = document.querySelector("#num");
    const inp = document.querySelector("#inp");
    const req = document.querySelector('#req');

    if (num.value.length != 0){
    inp.innerHTML = null;
    inp.innerHTML = `Antes de ${num.value}, temos o número ${Number(num.value) - 1}.<br>`;
    inp.innerHTML += `Depois de ${num.value}, temos o número ${Number(num.value) + 1}.`;
    } else {
        req.innerHTML = "[ERRO]"
    }
}
