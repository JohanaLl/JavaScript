const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

console.log('Break');
for (let i = 0; i < numbers.length; i++) {
    if (i === 5) {
        break;
    }
    console.log(numbers[i]);
}

console.log('Continue');
for (let i = 0; i < numbers.length; i++) {
    if (i === 5) {
        continue;
    }
    console.log(numbers[i]);
}

console.log('Números pares');
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
        continue;
    }
    console.log(numbers[i]);
}