/*
Tema: Analisador de receitas.

Entrada: Tempo máximo de preparo informado pelo usuário.
Processamento: Classificar as receitas por tempo e categoria.
Saída: Relatório com as receitas e resumo dos tempos.

Pseudocódigo:
1. Criar uma lista de receitas.
2. Solicitar e validar o tempo máximo de preparo.
3. Percorrer e classificar as receitas.
4. Identificar a categoria de cada receita.
5. Calcular o total e a média dos tempos.
6. Exibir o relatório no console.
7. Repetir consultas até o usuário digitar sair.
*/

const listaReceitas = [
    { nome: "Bolo de chocolate", tempo: 40, categoria: "Doce" },
    { nome: "Panqueca", tempo: 20, categoria: "Salgado" },
    { nome: "Brigadeiro", tempo: 15, categoria: "Doce" },
    { nome: "Lasanha", tempo: 60, categoria: "Salgado" },
    { nome: "Suco de laranja", tempo: 5, categoria: "Bebida" }
];

const entradaTempo = prompt("Qual o tempo máximo de preparo em minutos?");

const tempoMaximo = Number(entradaTempo);

const entradaValida =
    entradaTempo !== null &&
    entradaTempo.trim() !== "" &&
    !Number.isNaN(tempoMaximo) &&
    tempoMaximo >= 1 &&
    tempoMaximo <= 180;

if (!entradaValida) {
    console.log("Entrada inválida. Informe um valor entre 1 e 180 minutos.");
} else {
    console.log(`Tempo máximo escolhido: ${tempoMaximo} minutos.`);
}
if (entradaValida) {
    for (const item of listaReceitas) {
        let classificacao;
        let descricaoCategoria;

        if (item.tempo <= 15) {
            classificacao = "Rápida";
        } else if (item.tempo <= 30) {
            classificacao = "Média";
        } else {
            classificacao = "Demorada";
        }

        switch (item.categoria) {
            case "Doce":
                descricaoCategoria = "Sobremesa";
                break;
            case "Salgado":
                descricaoCategoria = "Refeição";
                break;
            case "Bebida":
                descricaoCategoria = "Bebida refrescante";
                break;
            default:
                descricaoCategoria = "Outros";
                break;
        }

        const disponibilidade = item.tempo <= tempoMaximo
            ? "Dentro do limite"
            : "Acima do limite";

        console.log(`${item.nome}: ${classificacao} - ${descricaoCategoria} - ${disponibilidade}`);
    }
}
if (entradaValida) {
    let tempoTotal = 0;
    let quantidadeDisponivel = 0;

    for (let i = 0; i < listaReceitas.length; i++) {
        tempoTotal += listaReceitas[i].tempo;

        if (listaReceitas[i].tempo <= tempoMaximo) {
            quantidadeDisponivel++;
        }
    }

    const mediaTempo = tempoTotal / listaReceitas.length;

    console.log("===== RELATÓRIO DE RECEITAS =====");
    console.table(listaReceitas);
    console.log(`Total de receitas: ${listaReceitas.length}`);
    console.log(`Tempo total: ${tempoTotal} minutos`);
    console.log(`Tempo médio: ${mediaTempo.toFixed(2)} minutos`);
    console.log(`Receitas dentro do limite: ${quantidadeDisponivel}`);
}
if (entradaValida) {
    let consulta = "";

    while (consulta !== "sair") {
        const entradaConsulta = prompt(
            "Informe outro tempo máximo ou digite sair:"
        );

        if (entradaConsulta === null) {
            consulta = "sair";
        } else {
            consulta = entradaConsulta.trim().toLowerCase();

            if (consulta === "sair") {
                console.log("Consultas encerradas.");
            } else {
                const novoLimite = Number(consulta);

                if (consulta === "" ||
                    Number.isNaN(novoLimite) ||
                    novoLimite < 1 ||
                    novoLimite > 180) {
                    console.log("Valor inválido.");
                } else {
                    let quantidade = 0;

                    for (const item of listaReceitas) {
                        if (item.tempo <= novoLimite) {
                            quantidade++;
                        }
                    }

                    console.log(`Até ${novoLimite} minutos: ${quantidade} receitas.`);
                }
            }
        }
    }
}
/*
Teste de mesa - Tempo máximo informado: 30 minutos.

Volta | Receita           | Tempo | Acumulador | Contador
  1   | Bolo de chocolate |  40   |     40     |    0
  2   | Panqueca          |  20   |     60     |    1
  3   | Brigadeiro        |  15   |     75     |    2

Resultado final:
Tempo total: 140 minutos.
Tempo médio: 28 minutos.
Receitas dentro do limite: 3.
*/