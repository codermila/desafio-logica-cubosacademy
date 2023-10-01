function calculateGoalkeeperPosition(numbers) {
    const S = numbers.reduce((sum, num) => sum + num, 0);
    const goalkeeperPosition = S % numbers.length;
    return goalkeeperPosition === 0 ? numbers.length : goalkeeperPosition;
}

const input = "1 3 2 1";
const numbers = input.split(" ").map(Number);

const goalkeeperPosition = calculateGoalkeeperPosition(numbers);

console.log(goalkeeperPosition);





