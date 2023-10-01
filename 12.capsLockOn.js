function processData(input) {
    if (input.charAt(0) === input.charAt(0).toLowerCase() && input.slice(1) === input.slice(1).toUpperCase()) {
        return input.split('').map((letra, index) => index === 0 ? letra.toUpperCase() : letra.toLowerCase()).join('');

    } else if (input === input.toLowerCase()) {
        return input;
    } else if (input === input.toUpperCase()) {
        return input.toLowerCase();
    } else {
        return input;
    }

};

console.log(processData("cAPS"));
console.log(processData("lock"));
console.log(processData("CAPS"));