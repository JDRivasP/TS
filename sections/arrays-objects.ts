/*
let person = {
    name: 'Lucashenko',
    lastName: 'Barrios',
    alias: 'Barrigonsin',
    age: 7,
    sex: 'Masculino',
    hobbies: 'hacer como sonic',
    isActive: true,
}

let car = {
    type: 'Vans',
    label: 'volkswagen',
    year: 1967,
    color: 'blue',
    gearbox: 'Manual',
    restored: true
}

let smartTv = {
    label: 'Samsung',
    model: 'ES8000',
    inch: '50',
    color: 'silver',
    refurbished: false,
    new: true
}

let youTubeVideo = {
    type: 'Games',
    hq: true,
    duration: '25 min',
    views: '1.3 M',
    likes: '1 M',
    direct: true,
    isActive: true,
}

console.log(person);
console.log(car);
console.log(smartTv);
console.log(youTubeVideo);
*/


export interface Person {
    name: string;
    age: number;
    isActive: boolean;
}
let lucas: Person = {
    name: 'Lucas',
    age: 7,
    isActive: true
};

let karla: Person = {
    name: 'Karla',
    age: 40,
    isActive: false
};

let alejandro: Person = {
    name: 'alejandro',
    age: 36,
    isActive: true
};

let people: Person[] = [alejandro, karla, lucas]

for( let i = 0; i < people.length; i++) {
    let person = people[i];
    console.log(person.age, person.name, person.isActive);
}