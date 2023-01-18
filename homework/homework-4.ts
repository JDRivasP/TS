

export let numbers: number[] = [1, 9, 6, 8, 4, 2, 7, 10, 3, 5, 20];
let limit = numbers.length;
let numeromayor: number = 0;

for (let i = 0; i < limit; i++) {
    let newNumber = numbers[i];
    if (newNumber > numeromayor) {
        numeromayor = newNumber;
    }

}//identificator[i]

console.log('El número mayor es', numeromayor);


/*
let numbers: number[] = [1, 9, 6, 8, 4, 2, 7, 10, 3, 5, 20];

let maxNumber = -999999;

for (let i = 0; i < numbers.length; i++) {
    
    if (numbers[i] >= maxNumber) {
        maxNumber = numbers[i];
    }

}//identificator[i]

console.log('El número mayor es', maxNumber);
*/