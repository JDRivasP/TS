/* 1 Lunes, 2 Martes, 3 Miercoles,
4 Jueves, 5 Viernes, 6 Sabado, 7 Domingo*/

export let weekDay: number = 4;

if (weekDay <= 0) {
    //throw new Error('Día de la semana no permitido')
    console.log('Día de la semana no permitido');
} else if (weekDay >= 8) {
    console.log('Día de la semana no permitido');
    //throw new Error('Día de la semana no permitido')
}

switch (weekDay) {
    case 1:
        console.log('Es Lunes');
        break;
    
    case 2:
        console.log('Es Martes');
        break;

    case 3:
        console.log('Es Miércoles');
        break;

    case 4:
        console.log('Es Jueves');
        break;

    case 5:
        console.log('Es Viernes');
        break;

    case 6:
        console.log('Es Sábado');
        break;

    case 7:
        console.log('Es Domingo');
        break;
}