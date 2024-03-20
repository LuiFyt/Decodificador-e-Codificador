var textoInserido = document.querySelector("#texto-inserido");

function criptografar(){
    
    var texto = textoInserido.value;

    var resultCriptografar = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "uber").replace(/a/g, "ai");

    document.getElementById('sessaoDeSaida').innerHTML = '<textarea readonly id="texto-inserido-dois">' + resultCriptografar + '</textarea>' + '<button class="btnCopiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
    var texto = textoInserido.value;

    var resultDescriptofar = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/uber/g, "u").replace(/ai/g, "a");

    document.getElementById('sessaoDeSaida').innerHTML = '<textarea readonly id="texto-inserido-dois">' + resultDescriptofar + '</textarea>' + '<button class="btnCopiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
    var textoResultado = document.querySelector("#texto-inserido-dois");

    navigator.clipboard.writeText(textoResultado.value);
}