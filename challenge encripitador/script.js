const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagens");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}
function encriptar(stringEcriptada) {
    let matrizCodigo=[["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEcriptada = stringEcriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEcriptada.includes(matrizCodigo[i][0])) {
            stringEcriptada = stringEcriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
    }

    return stringEcriptada;

}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}
function desencriptar(stringDesencriptada) {
    let matrizCodigo=[["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
    }

    return stringDesencriptada;
}

const btnCopiar = document.querySelector(".btn-copiar");
const mensagens = document.querySelector(".mensagens");

btnCopiar.addEventListener("click", function() {
    mensagens.select();
    document.execCommand("copy");
});
const mensagemFeedback = document.querySelector('.mensagem-feedback');

function showFeedback(texto) {
    mensagemFeedback.textContent = texto;
    mensagemFeedback.classList.add('show');
    setTimeout(function() {
        mensagemFeedback.classList.remove('show');
    }, 3000);
}









