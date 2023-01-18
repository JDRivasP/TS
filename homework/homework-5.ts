

export let numbers: number[] = [1, 9, 6, 8, 4, 2, 7, 10, 3, 5, 20];
let limit = numbers.length;

for (let i = 0; i < limit; i++) {
    let resultDiv: number = numbers[i] % 2;
    //console.log(resultDiv)
    if (resultDiv === 1) {
        console.log(numbers[i], 'Es Impar');
    } else {
        console.log(numbers[i], 'Es Par');
    }
}


/*
let numbers: number[] = [1, 9, 6, 8, 4, 2, 7, 10, 3, 5, 20];

for (let i = 0; i < numbers.length; i++) {
   
    let number = numbers[i];
    
    if ( (number % 2) === 0 ) {
        console.log(numbers[i], 'Es par');
    } else {
        console.log(numbers[i], 'Es Impar');
    }
}
*/