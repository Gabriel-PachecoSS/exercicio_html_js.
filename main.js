/*const formulario = document.getElementById('formNumber')
let valorA = document.getElementById(campoA)
let valorB = document.getElementById(campoB)

function validaNumero() {
    

    valorA = parseFloat(valorA)
    valorB = parseFloat(valorB)
    
    if (valorB > valorA) {
        alert("Formulário válido", "valid")
    }
    else {
        alert("Formulário inválido, o número do campo B deve ser maior que o inserido no campo A", "invalid")
    }
}
*/

function validarFormulario() {
    // Obtém os valores dos campos A e B
    var valorA = document.getElementById("campoA").value;
    var valorB = document.getElementById("campoB").value;

    // Converte os valores para números
    valorA = parseFloat(valorA);
    valorB = parseFloat(valorB);

    // Verifica se B é maior que A
    if (valorB > valorA) {
        exibirMensagem("Formulário válido!", "valid");
    } else {
        exibirMensagem("Formulário inválido! O número em B deve ser maior que o número em A.", "invalid");
    }
}

function exibirMensagem(mensagem, classe) {
    var mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = mensagem;
    mensagemDiv.className = "message " + classe;
    mensagemDiv.style.display = "block";
}
