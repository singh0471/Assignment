function sumOfFibonacci() {
    let a = 0, b = 1;
    let sum = a + b;

    while (true) {
        let next = a + b;
        if (next > 5000) break;
        sum += next;
        a = b;
        b = next;
    }

    return sum;
}

console.log(`Sum of Fibonacci series up to 5000 is: ${sumOfFibonacci()}`);
console.log("fibonnaci")