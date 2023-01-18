/*
*Primero establecemos nuestra variable de control
que puede ser cualquier valor que yo necesite
*Luego establecemos  la condicion cuando deba terminar el ciclo
*luego como de incrementar o decrecer nuestra variable de control
*/

export let limite = 100

for (let i = 0; i <= limite; i++) {

    if (i === 5) {
        continue;
    }

    console.log('let i:', i)

    if (i === 5) {
        break;
    }
}

console.log('fin de programa')