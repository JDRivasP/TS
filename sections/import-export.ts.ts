/*
function greet(name: string = 'Mundo') {
    console.log ('Hola' + ' ' + name);
}
*/


//let firstName = 'Jorge';
//greet(firstName);
//greet();



/*
import { addTwoNumbers } from "./helpers/mat-helpers";
import { substractTwoNumbers } from "./helpers/mat-helpers";
import { timesTwoNumbers } from "./helpers/mat-helpers";
import { divideTwoNumbers } from "./helpers/mat-helpers";
*/

import {
    addTwoNumbers,
    substractTwoNumbers,
    timesTwoNumbers,
    divideTwoNumbers  
} from "../helpers/mat-helpers";

let num1: number = 10;
let num2: number = 20;


let total1: number = addTwoNumbers(num1, num2);
let total2: number = substractTwoNumbers(num1, num2);
let total3: number = timesTwoNumbers(num1, num2);
let total4: number = divideTwoNumbers(num1, num2);


console.log('Total1: ', total1);
console.log('Total2: ', total2);
console.log('Total3: ', total3);
console.log('Total4: ', total4);
