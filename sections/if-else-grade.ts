/*
REALIZAR UN PROGRAMA QUE MUESTRE LA NOTA 
DEL ALUMNO COMO:

A >= 90
B >= 80
C >= 70
D >= 60
F < 60
*/


console.log('Inicio Programa');

export let grade: number = 59;

if (grade >= 90) {
    console.log('A Excelente!!!');
} else if (grade >= 80) {
    console.log('B Muy Bien!!!');
} else if (grade >= 70) {
    console.log('C Puedes hacerlo mejor!!!');
} else if (grade >= 60) {
    console.log('D Esfuerzate más!!!');
} else {
    console.log('F Deja los video juegos!!!');
}


console.log('Fin de Programa');


/*
console.log('Inicio Programa');

let grade: number = 59;
let gradeLetter: string;

if (grade >= 90) {
    gradeLetter = 'A Excelente!!!';
} else if (grade >= 80) {
    gradeLetter = 'B Muy Bien!!!'; 
} else if (grade >= 70) {
    gradeLetter = 'C Puedes hacerlo mejor!!!';
} else if (grade >= 60) {
    gradeLetter = 'D Esfuerzate más!!!' ;
} else {
    gradeLetter = 'D Deja los video juegos!!!';
}

console.log(gradeLetter);

console.log('Fin de Programa');
*/