//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomeDosAmigos = [];

function adicionarAmigo(){

    let nomeDoAmigo = document.querySelector("#amigo").value;

    if (nomeDoAmigo == "" || nomeDoAmigo == " "){
        alert("erro: Por favor, insira um nome");
    } else if (nomeDosAmigos.includes(nomeDoAmigo)){
        alert("erro: Você já adicionou este amigo");
    } else {
        nomeDosAmigos.push(nomeDoAmigo);
        nomeDoAmigo = "";
    }
}

function criarListaDeAmigos(){
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
    
    for (let i = 0; i < nomeDosAmigos.length; i++){
      let item = document.createElement("li");
        item.textContent = nomeDosAmigos[i];
        listaAmigos.appendChild(item); 
        
    }
}


function sortearAmigo(){
    if (nomeDosAmigos.length == 0){
        alert("erro: Por favor, adicione um ou mais amigos para serem sorteados");
    } else {
        let numeroSorteado = Math.random() * nomeDosAmigos.length;
        let deixandoNumeroInteiro = Math.floor(numeroSorteado);
        let amigoSorteado = nomeDosAmigos[deixandoNumeroInteiro];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
        let nomeSorteado = document.createElement("li");
        nomeSorteado.textContent = amigoSorteado;
        resultado.appendChild(nomeSorteado);
    }

}