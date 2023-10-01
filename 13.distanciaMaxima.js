function processData(input) {

    const linhas = input.trim().split("\n");
    const n = parseInt(linhas[0], 10);

    const coordenadas = linhas.slice(1).map(coord => {
        const [x, y] = coord.split(" ").map(parseFloat);
        return { x, y };
    });

    const calcularDistancia = (funcionario1, funcionario2) => Math.hypot(funcionario1.x - funcionario2.x, funcionario1.y - funcionario2.y);
    const maiorDistancia = coordenadas.reduce((maior, funcionario1, index1) =>
        coordenadas.slice(index1 + 1).reduce((distMaxima, funcionario2) =>
            Math.max(distMaxima, calcularDistancia(funcionario1, funcionario2)), maior), 0);

    console.log(maiorDistancia);
};

processData("3\n0 0\n0 3\n4 0");