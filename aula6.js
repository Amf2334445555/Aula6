let contador = 0
let txtcontador = document.getElementById("txtcontador")
let txtmensagem = document.getElementById("txtmensagem")


function aumentar() {
    contador++
    txtcontador.innerHTML = contador
    exibirMensagem()
}
function diminuir() {
    contador--
    txtcontador.innerHTML = contador
    exibirMensagem()
}
function exibirMensagem() {
    if(contador < 20){
        mensagem.innerHTML = 'Pode entrar!'
    }else{
        mensagem.innerHTML = 'Lotado!'
    }
}