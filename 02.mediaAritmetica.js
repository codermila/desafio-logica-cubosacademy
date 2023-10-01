const lista = [2, 3, 4];

const valorAcumulado = lista.reduce((acumulador, valorAtual, indice, array) => {
    return acumulador + valorAtual;
});
//valorAcumulado.pop()
const media = valorAcumulado / lista.length;

console.log(media);