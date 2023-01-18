console.log('Inicio de Programa');

export let isTired: boolean = true;

if (isTired) {
    console.log('Tomar Café')
}

if (!isTired) {
    console.log('Tomar Agua')
}

console.log('Fin de Programa');



console.log('Inicio de Programa');

let isBoring: boolean = !true

if (isBoring) {
    console.log('Sal a Correr')
} else {
    console.log('Pega un Camaron')
}

console.log('Fin de Programa');


console.log('Inicio Programa');

let grade: number = 100;

if (grade >= 60) {
    console.log('El alumno aprueba la clase!');
} else if (grade > 50) {
    console.log('Por favor estudie más!')
} else {
    console.log('Reprobo la clase!');
    if (grade <= 30) {
        console.log('Hijo dediquese a otra cosa!')
    }
}

console.log('Fin de Programa');