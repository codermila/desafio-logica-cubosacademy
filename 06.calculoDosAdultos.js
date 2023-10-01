
function solucao(lista) {
    let menorIdade = Infinity;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] >= 18 && lista[i] < menorIdade) {
            menorIdade = lista[i];
        }
    }

    if (menorIdade !== Infinity) {
        console.log(menorIdade);
    } else {
        console.log("CRESCA E APARECA");
    }
};;

const idades = [12, 18, 27];
solucao(idades);