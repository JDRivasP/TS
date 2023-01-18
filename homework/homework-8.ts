

export function mutants(a: string, b: string, c: string, d: string) {
    let nameMutants = [a, b, c, d];
    let hero = '';
    for (let i = 0; i < nameMutants.length; i++) {
        if (nameMutants[i].length > hero.length) {
            hero = nameMutants[i];
        }
    }
    return hero;
}

let xmen = mutants('Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier');
console.log(xmen, xmen.length, 'caracteres');


/*
export function largestNameOfArray(nameArray: string[]) {

    let largestName = '';
    for (let i = 0; i < nameArray.length; i++) {
        let name = nameArray[i];
        if (name.length > largestName.length) {
            largestName = name;
        }
    }

    return largestName;
}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let hero = largestNameOfArray(heroes);
console.log(hero); // Profesor Charles Xavier
*/