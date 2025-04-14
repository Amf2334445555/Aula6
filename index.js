let contador = 0
let quantidade = document.getElementById("quantidade")
let info = document.getElementById("info")

function mais() {
    contador++
    quantidade.innerHTML = contador
    exibirMensagem()
}

function menos() {
    contador--
    quantidade.innerHTML = contador
    exibirMensagem()
}

function mais2() {
    contador = contador + 2
    quantidade.innerHTML = contador
    exibirMensagem()
}

function menos2() {
    contador = contador - 2
    quantidade.innerHTML = contador
    exibirMensagem()
}

function zerar() {
    contador = 0
    quantidade.innerHTML = contador
    exibirMensagem()
}

function exibirMensagem() {
    if(contador < 20){
        info.innerHTML = 'aumentando';
    }else if(contador = 0){
        info.innerHTML = '...'
    }else{
        info.innerHTML = 'Máximo do lote atingido';
    }
}