

function solucao(min, max, valores) {
    let valores = [0, 5, 10, 11];
    const valoresPermitidos = valores.filter(valor => valor >= min && valor <= max);
    return valoresPermitidos;
};

solucao(2, 10);
console.log(valoresPermitidos);