
const formulario = document.getElementById("formulario-receita");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    mensagem.textContent = "Receita enviada com sucesso!";
    formulario.reset();
});


const canvas = document.getElementById("graficoReceitas");
const ctx = canvas.getContext("2d");

const receitas = [
    { nome: "Bolo", tempo: 40, cor: "#925437" },
    { nome: "Panqueca", tempo: 20, cor: "#d6a04f" },
    { nome: "Brigadeiro", tempo: 15, cor: "#613322" }
];

ctx.font = "12px Arial";
ctx.textAlign = "center";

receitas.forEach(function (receita, i) {
    const x = 30 + i * 100;
    const altura = receita.tempo * 4;
    const y = 200 - altura;

    ctx.fillStyle = receita.cor;
    ctx.fillRect(x, y, 60, altura);

    ctx.fillStyle = "#000000";
    ctx.fillText(receita.tempo + " min", x + 30, y - 10);
    ctx.fillText(receita.nome, x + 30, 220);
});
