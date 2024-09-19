function factorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

let number = parseInt(prompt("Enter a number: "));

if (isNaN(number)) {
    console.log("Invalid input.");
} else if (number >= 0) {
    console.log(`Factorial of ${number} is: ${factorial(number)}`);
} else {
    console.log("Entered number is negative.");
} 
