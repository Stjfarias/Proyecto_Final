function encriptar() {
    let texto = document.getElementById("input-text").value;

    if (!validarTexto(texto)) {
        mostrarError("SOLO LETRAS MINUSCULAS, SIN CARACTERES ESPECIALES");
        alert("Por favor solo ingrese MINUSCULAS");
        return;
    }

    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

        document.getElementById("input-text").value = "";
        mostrarResultado(textoEncriptado);
}

function desencriptar() {
    let texto = document.getElementById("input-text").value;

    if (!validarTexto(texto)) {
        mostrarError("Solo letras minúsculas y sin caracteres especiales");
        alert("Por favor solo ingrese MINUSCULAS");
        return;
    }

    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
    let placeholderImage = document.getElementById("placeholder-image");
    let outputText = document.getElementById("output-text");
    let copyButton = document.getElementById("CopiarBoton");

    placeholderImage.style.display = "none";
    outputText.style.display = "block";
    outputText.value = texto;
    copyButton.style.display = "block";
}

function mostrarError(mensaje) {
    let errorMessage = document.getElementById("error-message");
    errorMessage.textContent = mensaje;
    errorMessage.style.display = "block";
}

function validarTexto(texto) {
    let regex = /^[a-z\s]/;
    return regex.test(texto);
}

function copiarTexto() {
    let outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
    document.getElementById("output-text").value = "";
}

function reiniciar() {
    document.getElementById("input-text").value = "";
    document.getElementById("output-text").value = "";
    document.getElementById("output-text").style.display = "none";
    document.getElementById("CopiarBoton").style.display = "none";
    document.getElementById("placeholder-image").style.display = "block";
    document.getElementById("error-message").style.display = "none";
}

window.onload = function() {
    document.getElementById("input-text").focus();
}