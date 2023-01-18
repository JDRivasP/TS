

export let numbers: number[] = [1, 2, 3, 4, 5];
let limit = numbers.length

for (let i = 0; i < limit; i++) {

    console.log(
        numbers[i] * 1,
        numbers[i] * 2,
        numbers[i] * 3,
        numbers[i] * 4,
        numbers[i] * 5)
}


/*
for (let i = 1; i <= 5; i++){

    let line = '';

    for (let j = 0; j <= 5; j++) {
        line += ` ${ j * i}`
    }
    console.log(line);
}
*/