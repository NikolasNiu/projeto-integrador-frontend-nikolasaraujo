
const formulario = document.getElementById("formulario-receita");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    mensagem.textContent = "Receita enviada com sucesso!";
    formulario.reset();
});
