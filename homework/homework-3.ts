

import {
    addTwoNumbers,
    substractTwoNumbers,
    timesTwoNumbers,
    divideTwoNumbers
} from "../helpers/mat-helpers";


let num3: number = 10;
let num4: number = 5;

let total2: number = timesTwoNumbers(num3, num4);
let divs: number = 2;
let total3: number = divideTwoNumbers(total2, divs)

console.log('Total Area', total3, 'm^2');


/*
export let base = 10;
    let height = 5;
    let area = (base * height) / 2;

console.log('área igual a:', area );
*/