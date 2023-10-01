function processData(input) {
    const linhas = input.split('\n');
    const senhaCorreta = linhas[0].trim();
    const palavraDigitada = linhas[1].trim();

    let senha = 0;

    for (let i = 0; i < palavraDigitada.length; i++) {
        if (palavraDigitada[i] === senhaCorreta[senha]) {
            senha++;
            if (senha === senhaCorreta.length) {
                console.log("SIM");
                return;
            }
        }
    }

    console.log("NAO");
};

processData("cubos\ncuggbyos");