function isPrimeNumber(a) {
    if ((a < 2) || (a > 1000)) {
        return 'Данные не верны';
    } else {
        for (let i = 2; i < a; i++) {
            if (a % i === 0) {
                return 'Составное';
            }
        }
        return 'Простое';
    }
}

let randomNumber = Math.ceil(Math.random() * 1000);
let result = isPrimeNumber(randomNumber);
console.log(`Число ${randomNumber} - ${result}`);