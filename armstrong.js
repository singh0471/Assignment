function isArmstrongNumber(number) {
    let sum = 0;
    const numDigits = number.toString().length; 
    let temp = number;

    while (temp > 0) {
        let remainder = temp % 10;
        sum += Math.pow(remainder, numDigits); 
        temp = parseInt(temp / 10); 
    }

    return sum === number;
}

function printArmstrongNumbers() {
    for (let i = 0; i <= 1000000; i++) {
        if (isArmstrongNumber(i)) {
            console.log(i);
        }
    }
}


printArmstrongNumbers();
