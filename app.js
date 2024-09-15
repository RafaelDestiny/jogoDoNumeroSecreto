              // variavel titulo vai recer do documento html uma tag selecionada `h1`
//let titulo = document.querySelector(`h1`);
       
// innerHtml / dentro do html vai devolver o resultado da variavel titulo
//titulo.innerHTML = "Jogo de Adivinhação!";

//let paragrafo = document.querySelector("p");

//paragrafo.innerHTML = "Escolha um numero entre 1 e 10";

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirNaTela(tag, texto){

let campo = document.querySelector(tag);
campo.innerHTML = texto;

}

exibirNaTela("h1", "Jogo de Adivinhação");
exibirNaTela("p", "Escolha um numero entre 1 e 10");

function verificarChute(){
let chute = document.querySelector("input").value;


if(chute == numeroSecreto){
exibirNaTela("h1", "Você ganhou");

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
exibirNaTela("p", mensagemTentativas);
document.getElementById("reiniciar").removeAttribute("disabled");

} else{

    exibirNaTela("h1", "Voce Errou!");
    exibirNaTela("p", "Tente Outra Vez");
}

tentativas ++;
campoLimpo();

}

function campoLimpo(){

    chute = document.querySelector("input")
     chute.value = "";

}

function gerarNumeroAleatorio(){
   let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeNumerosEscolhidos = listaDeNumerosSorteados.length

   if(quantidadeDeNumerosEscolhidos == numeroLimite){

    listaDeNumerosSorteados = [];

}

if(listaDeNumerosSorteados.includes(numeroEscolhido)){

    return gerarNumeroAleatorio();

}else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;

}


}

function mensagemInacial(){

exibirNaTela("h1", "Jogo de Adivinhação");
exibirNaTela("p", "Escolha um numero entre 1 e 10");

}

function reiniciarJogo(){

    numeroSecreto =gerarNumeroAleatorio();
    campoLimpo();
    tentativas = 1;
    mensagemInacial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}