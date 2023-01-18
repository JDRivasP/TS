

export function heroesThatStartsWith(nameList: string[], letter: string) {

    letter = letter.toUpperCase();
    let newNameList: string[] = [];
    /*
    for (let i = 0; i < namelist.length; i++){
        let name = namelist[i];
        if(name.startsWith(letter)) {
            newNameList.push(name)
        }
    }
    */
    for (let name of nameList) {
        if (name.startsWith(letter)) {
            newNameList.push(name);
        }
    }
    return newNameList;
}


let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let herosWithLetterS = heroesThatStartsWith(heroes, 'S');
console.log(herosWithLetterS); // She Hulk, Spiderman