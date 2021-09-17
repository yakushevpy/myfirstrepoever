function task10(){
    task1desc = `   if (строка с нулём)
Выведется ли alert?`;
    task2desc = `   Название JavaScript
Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»`
    task3desc = `  Покажите знак числа
Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа.`
    task4desc = `   Перепишите 'if' в '?'
Перепишите конструкцию if с использованием условного оператора '?':`
    task5desc = `   Перепишите 'if..else' в '?'
Перепишите if..else с использованием нескольких операторов '?'.
Для читаемости рекомендуется разбить код на несколько строк.`
    confirm(`Задание:\n${task1desc}\n`);
    task10_1();
};


function task10_1(){
    alert(`Выведется`);
    confirm(`Задание:\n${task2desc}\n`);
    task10_2();
};

function task10_2(){
    let askNameOfJava = prompt(`Какое «официальное» название JavaScript?`, '')
    if (askNameOfJava == 'ECMAScript') {
        alert(`Верно!`)
    } else {
        alert(`Не знаете? ECMAScript!`)
    };
    confirm(`Задание:\n${task3desc}\n`);
    task10_3();
}

function task10_3(){
    let number = prompt('Введите любое целое число', -5);
    if (number == 0){
        alert('0')
    } else if (number > 0){
        alert('1')
    } else {
        alert('-1')
    };
    confirm(`Задание:\n${task4desc}\n`);
    task10_4();
}

function task10_4(){
    alert(`let result = (a + b < 4) ? 'Мало': 'Много'`)
    confirm(`Задание:\n${task5desc}\n`);
    task10_5();
}

function task10_5(){
    alert(`let message = (login == 'Сотрудник') ? 'Привет': 
(login == 'Директор') ? 'Здравствуйте': 
(login == '') ? 'Нет логина': 
'';`)
}