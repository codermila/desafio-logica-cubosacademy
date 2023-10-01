const array = [1, 2, 3, 4];
const valorAcumulado = array.reduce((acumulador, valorAtual, indice, array) => {
    return acumulador + valorAtual;
});
console.log(valorAcumulado);