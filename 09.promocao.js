function solucao(precos) {
    precos.sort((a, b) => a - b);
    let total = precos.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

    if (precos.length >= 3) {
        total -= precos[0] / 2;
    }

    console.log(total);
}

solucao([150, 50]);
