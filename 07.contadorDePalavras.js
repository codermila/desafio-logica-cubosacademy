function solucao(texto) {
    texto = texto.trim();

    const palavras = texto.split(/\s+/);
    const palavrasFiltradas = palavras.filter(palavra => palavra !== '');

    return palavrasFiltradas.length;
}

console.log(solucao("Um texto, .   qual quer"));