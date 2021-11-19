function task5_2(){
    taskdesc = {
        1: 'Сумма пользовательских чисел',
        2: 'Почему 6.35.toFixed(1) == 6.3?',
        3: 'Ввод числового значения',
        4: 'Бесконечный цикл по ошибке',
        5: 'Случайное число от min до max',
        6: 'Случайное целое число от min до max',
    };

    confirm( `Задание:\n${taskdesc[1]}\n` );
    task5_2_1();
};

function task5_2_1() {
    x = +prompt( '1', 1 )
    y = +prompt( '2', 2 )
    alert( x+y )  
    confirm( `Задание:\n${taskdesc[2]}\n` );
    task5_2_2();
};

function task5_2_2() {
    alert( '6.35 = '+  6.35.toFixed(1) + '\n' + '6.35 = '+ Math.round( 6.35 * 10 ) / 10 ) + `\n 6.35.toFixed(1) \nMath.round( 6.35 * 10 ) / 10`;
    confirm( `Задание:\n${taskdesc[3]}\n` );
    task5_2_3();
};

function task5_2_3() {
    x = prompt( 'Введите число', 'Хрен тебе' );
    if (isFinite(x)) {
        alert( 'GG - '+ x + ' is a number' ) 
        confirm( `Задание:\n${taskdesc[4]}\n` );
        task5_2_4();
    } else {
        alert( 'Lets try one more time' );
        task5_2_3();
    };
};

function task5_2_4(){
    let i = 0;
    let x = 'The answer is: Погрешность';
    while ( i < 11 ) {
        i += 0.2;
        x += '\n' + i
    };
    alert( x );
    confirm( `Задание:\n${taskdesc[5]}\n` );
    task5_2_5();
};

function task5_2_5() {
    random(1,5);
    confirm( `Задание:\n${taskdesc[6]}\n` );
    task5_2_6()
};

function task5_2_6() {
    randomInteger(1,5);
};



function random( min, max ) {
    let n = 1
    let number = 'rnd:'
    let func = `
    min + ( Math.random() * ( max - min ))
    `
    while ( n < 6 ) {
        n += 1
        number += '\n' + ( min + ( Math.random()*( max - min )));
    };
    alert ( number + '\n' + func );
};


function randomInteger( min, max ) {
    let n = 1;
    let number = 'rndInt:'
    let func = ``
    while ( n < 6 ) {
        n += 1;
        x = ( min + (Math.random()*(max-min))).toFixed(0)
        number += '\n' + x
    };
    alert (number + '\n' + func)
}












