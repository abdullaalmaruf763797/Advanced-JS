const numbers = [1, -2, 3, 4, -5, 6, 7, -8, 9, 10, 11];
for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    if (numbers[i] > 6) {
        break;
    }
    
}


for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        continue;
    }
    console.log(numbers[i]);
}