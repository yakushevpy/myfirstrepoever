function task5_2(){
    taskdesc = {
        1: 'Сумма пользовательских чисел',
        2: 'Почему 6.35.toFixed(1) == 6.3?',
        3: 'Ввод числового значения',
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
    alert( '6.35 = '+  6.35.toFixed(1) )
    alert( '6.35 = '+ Math.round(6.35 * 10) / 10 )
    confirm( `Задание:\n${taskdesc[3]}\n` );
    task5_2_3();
};

function task5_2_3() {
    x = prompt( 'Введите число', 'Хрен тебе' );
    if (isFinite(x)) {
        alert( 'GG - '+ x + ' is a number' ) 
    } else {
        alert( 'Lets try one more time' );
        task5_2_3();
    };
};











