//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Array para ser usado durante a execução das funções
let nomeDosAmigos = [];

//Função para receber nomes digitados e armazená-los no arrray
function adicionarAmigo(){
    
    //adiciona nomes a var nomeDoAmigo
    let nomeDoAmigo = document.querySelector("#amigo").value;

    //verifica se campo enviado não está vazio e se já está no array. Caso contrário,
    //adiciona valor da var nomeDoAmigo ao array
    if (nomeDoAmigo == "" || nomeDoAmigo == " "){
        alert("erro: Por favor, insira um nome");
    } else if (nomeDosAmigos.includes(nomeDoAmigo)){
        alert("erro: Você já adicionou este amigo");
    } else {
        nomeDosAmigos.push(nomeDoAmigo);
        nomeDoAmigo = "";
    }
}

//cria uma lista com nomes armazenados no array
function criarListaDeAmigos(){

    //"conecta" pelo id elemento ul a var listaAmigos
    let listaAmigos = document.querySelector("#listaAmigos");
    
    //atualiza a lista, limpa a cada execução
    listaAmigos.innerHTML = "";

    //percorre o array, criar novos elementos li para cada nome adicionado ao array, pela var item e adiciona ao elemento ul
    for (let i = 0; i < nomeDosAmigos.length; i++){
      let item = document.createElement("li");
        item.textContent = nomeDosAmigos[i];
        listaAmigos.appendChild(item); 
        
    }
}


function sortearAmigo(){
    //verifica pelo tamanho da lista se ela não está vazia. caso contrário, 
    
    if (nomeDosAmigos.length == 0){
        alert("erro: Por favor, adicione um ou mais amigos para serem sorteados");
    } else {

        //  funções matemáticas para sortear um número e deixá-lo inteiro
        let numeroSorteado = Math.random() * nomeDosAmigos.length;
        let deixandoNumeroInteiro = Math.floor(numeroSorteado);
        //atribui numero sorteado presente no array a var amigoSorteado pelos índices do array
        let amigoSorteado = nomeDosAmigos[deixandoNumeroInteiro];
        //pelo id, conecta var resultado ao elemento ul
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
        //adiciona e cria elementos li com valores na var nomeSorteado
        let nomeSorteado = document.createElement("li");
        nomeSorteado.textContent = amigoSorteado;
        resultado.appendChild(nomeSorteado);
    }

}
