let listaDeNumerosSorteados = [];
const limite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativa = 0;

function exibirTextoNaTela(tag, texto) {
     campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function exibirMensagemNaTela() {
    exibirTextoNaTela('h1', 'Joguinho nota 10');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function limparCampo() {
     chute = document.querySelector('input');
    chute.value = '';
}

function verificarChute() {
     chute = parseInt(document.querySelector('input').value);
    tentativa++;
     palavraTentativa = tentativa > 1 ? ' tentativas' : ' tentativa';
     mensagemTentativas = `Você acertou em ${tentativa}${palavraTentativa}`;
    
    if (chute === numeroAleatorio) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        exibirTextoNaTela('p', chute > numeroAleatorio ? 'Número secreto é menor' : 'Número secreto é maior');
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    if (listaDeNumerosSorteados.length === limite) {
        listaDeNumerosSorteados = [];
    }
    
    let numeroEscolhido;
    do {
        numeroEscolhido = Math.floor(Math.random() * limite) + 1;
    } while (listaDeNumerosSorteados.includes(numeroEscolhido));
    
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 0;
    exibirMensagemNaTela();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


exibirMensagemNaTela();
document.getElementById('reiniciar').setAttribute('disabled', true);
