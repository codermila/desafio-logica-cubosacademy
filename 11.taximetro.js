function solucao(min, km) {
    const valorPorMinuto = 0.5;
    const valorporkmMenorqueDez = 0.7;
    const valorporkmMaiorqueDez = 0.5;
    const valorMinAcimaVinte = 0.3;

    let valorTotal = min * valorPorMinuto;
    if (km <= 10) {
        valorTotal += km * valorporkmMenorqueDez;
    } else {
        valorTotal += 10 * valorporkmMenorqueDez;
        valorTotal += (km - 10) * valorporkmMaiorqueDez;

    }
    if (min > 20) {
        valorTotal -= (min - 20) * valorMinAcimaVinte;
    }

    console.log(Math.round(valorTotal));

}
console.log(solucao(25, 11));