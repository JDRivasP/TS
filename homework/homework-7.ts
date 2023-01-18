

export function max(a: number, b: number, c: number) {
    let numbers = [a, b, c];
    let maxNum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxNum) {
            maxNum = numbers[i];
        }
    }
    return maxNum;
}

let maxValue = max(5, 6, 2);
console.log('El número mayor es:', maxValue);

/*
function max(a: number, b: number, c: number) {
    if (a>b) {
        return (a>c) ? a : C;
    }

    if (b>c) {
        return b;
    }
    return (a>c) ? a : c;
}

let maxValue = max(15, 22, 36)
console.log(maxValue);
*/