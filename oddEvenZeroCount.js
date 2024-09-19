function countEvenOddZero(numbers) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;

    for (let number of numbers) {
        if (number === 0) {
            zeroCount++;
        } else if (number % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    return [evenCount, oddCount, zeroCount];
}

let input = prompt("Please enter numbers separated by commas : ");
let numbersArray = input.split(',').map(Number);
let [evenCount, oddCount, zeroCount] = countEvenOddZero(numbersArray);

console.log(`Even numbers count: ${evenCount}`);
console.log(`Odd numbers count: ${oddCount}`);
console.log(`Zeros count: ${zeroCount}`); 
