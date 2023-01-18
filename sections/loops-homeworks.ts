

export let base = 10;
export let limit = 50;


/*
for (let i = 1; i <= limit; i++) {

    //console.log(10, 'x', i, '=', i*10 )
    console.log(base, 'x', i, '=', i*base)
}
*/

/*
let i = 1;

while (i <= limit) {
    console.log(base, 'x', i, '=', i * base)
    i++;
}
*/

let i = 1;

do {
    console.log(base, 'x', i, '=', i * base)
    i++;
} while (i <= limit); 