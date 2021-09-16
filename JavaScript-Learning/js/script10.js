function task14(){
    task1desc = `   Напишите "if", аналогичный "switch"`;
    task2desc = `   Переписать условия "if" на "switch"`
    confirm(`Задание:\n${task1desc}\n`);
    task14_1();
};


function task14_1(){
    let browser = prompt('Введите название браузера', 'Firefox')
    if(browser === 'Edge'){
        alert( "You've got the Edge!" ); 
    } else if(browser === 'Opera' || 
            browser === 'Chrome' || 
            browser === 'Firefox' || 
            browser === 'Opera') {
        alert( 'Okay we support these browsers too' );
    } else {
        alert( 'We hope that this page looks ok!' );
    }
    alert(`     Решение:

if(browser === 'Edge'){
    alert( "You've got the Edge!" ); 
} else if(browser === 'Opera' || 
        browser === 'Chrome' || 
        browser === 'Firefox' || 
        browser === 'Opera') {
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}`);
    confirm(`Задание:\n${task2desc}\n`);
    task14_2();
};


function task14_2(){
    const number = +prompt('Введите число между - и 3', '0');
    switch(number) {
        case 0: 
            alert('Вы ввели число 0');
            break;

        case 1: 
            alert('Вы ввели число 1');
            break;

        case 2:
        case 3: 
            alert('Вы ввели число 2, а может и 3');
            break;
    }
    alert(`     Решение: 
switch(number) {
    case '0': 
        alert('Вы ввели число 0');
        break;

    case '1': 
        alert('Вы ввели число 1');
        break;

    case '2':
    case '3': 
        alert('Вы ввели число 2, а может и 3');
        break;
    }`)
}