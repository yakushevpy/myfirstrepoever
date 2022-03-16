function task5_2(){
    taskdesc = {
        1: 'Сумма пользовательских чисел',
        2: 'Почему 6.35.toFixed(1) == 6.3?',
        3: 'Ввод числового значения',
        4: 'Бесконечный цикл по ошибке',
        5: 'Случайное число от min до max',
        6: 'Случайное целое число от min до max',
    };

    let tasklen = (Object.keys(taskdesc).length);
    let taskFunctions = new TaskFunctions();
    let taskNumber = taskFunctions.setNumber(tasklen);
    if (taskNumber) {
        let answer = taskFunctions.confirming(taskNumber, taskdesc)
        if (answer) taskRunning5_2(taskNumber);
    };
};

function taskRunning5_2(taskNumber) {
    switch(taskNumber) {
        case 1:
            let firstNumber = +prompt( 'Введите первое число', 1 )
            let secondNumber = +prompt( 'Введите еще число', 2 )
            alert(`Сумма чисел ${firstNumber} и ${secondNumber} равна ${firstNumber+secondNumber}`)     
            break;
        case 2:
            alert( '6.35 = '+  6.35.toFixed(1) + '\n' + '6.35 = '+ Math.round( 6.35 * 10 ) / 10 ) + `\n 6.35.toFixed(1) \nMath.round( 6.35 * 10 ) / 10`;
            break;
        case 3:
            x = prompt( 'Введите число', 'Хрен тебе' );
            if (isFinite(x)) {
                alert( 'GG - '+ x + ' is a number' ) 
                break
                task5_2_4();
            } else {
                alert( 'Lets try one more time' );
                break;
            };
        case 4:
            let i = 0;
            let x = 'The answer is: Погрешность';
            while ( i < 11 ) {
                i += 0.2;
                x += '\n' + i
            };
            alert( x );
            break;
        case 5:
            random(1,5);
            break;
        case 6:
            randomInteger(1,5);
            break;
    }
    
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












