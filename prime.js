function prime(num) {
    if (num < 2) return false;
    else if (num == 2) return true;
    else if (num % 2 == 0) return false;

    for (let i = 3; i * i <= num; i += 2) {
        if (num % i == 0) return false;
    }
    return true;
}

let num = parseInt(prompt("Enter a number: "));

if (isNaN(num)) {
    console.log("Invalid input.");
} else {
    console.log(prime(num));
}
