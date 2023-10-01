function solucao(jogadores) {
    let zeros = 0;
    let uns = 0;
    let zero = null;
    let um = null;

    for (const jogador of jogadores) {
        if (jogador.jogada === 0) {
            zeros++;
            zero = jogador.nome;
        } else {
            uns++;
            um = jogador.nome;
        }
    }

    if (zeros === 1) {
        return zero;
    } else if (uns === 1) {
        return um;
    } else {
        return "NINGUEM";
    }
};

const jogadores = [
    { nome: "Herman", jogada: 1 },
    { nome: "Rhodes", jogada: 0 },
    { nome: "Beach", jogada: 0 },
    { nome: "Laurel", jogada: 0 },
    { nome: "Beatrice", jogada: 0 },
    { nome: "Alison", jogada: 0 },
    { nome: "Saundra", jogada: 0 },
    { nome: "Klein", jogada: 0 }
];

const resultado = solucao(jogadores);
console.log(resultado);