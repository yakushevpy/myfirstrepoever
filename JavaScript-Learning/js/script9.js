function task13(){
    task1desc = `   Последнее значение цикла
Какое последнее значение выведет этот код? Почему?
let i = 3;

while (i) {
  alert( i-- );
}`;
    task2desc = `   Какие значения выведет цикл while?
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
Оба цикла выводят alert с одинаковыми значениями или нет?`
    task3desc = `   Какие значения выведет цикл for?
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
Оба цикла выведут alert с одинаковыми значениями или нет?`
    task4desc = `   Выведите чётные числа
При помощи цикла for выведите чётные числа от 2 до 10.`
    task5desc = `   Замените for на while
Перепишите код, заменив цикл for на while, без изменения поведения цикла.`
    task6desc = `   Повторять цикл, пока ввод неверен`
    task7desc = `   Вывести простые числа`
    confirm(`Задание:\n${task1desc}\n`);
    task13_1();
};


function task13_1(){
    alert(`Единицку - 1`);
    confirm(`Задание:\n${task2desc}\n`);
    task13_2();
};

function task13_2(){
    alert(`первый варик - 1,2,3,4
второй варик - 1,2,3,4,5`);
    confirm(`Задание:\n${task3desc}\n`);
    task13_3();
};

function task13_3(){
    alert(`первый - 0,1,2,3,
второй - 1,2,3,4,`);
    confirm(`Задание:\n${task4desc}\n`);
    task13_4();
};

function task13_4(){
    for(let i =2; i <= 10; ++i ) {
        if(i % 2 == 0) {
            alert(i);
            
        };
    };
    confirm(`Задание:\n${task5desc}\n`);
    task13_5();
};

function task13_5() {
    let i = 0;
    while(i++ < 3) alert (`Number ${i}`);
    confirm(`Задание:\n${task6desc}\n`);
    task13_6();
};

function task13_6() {
    let n;
    do {
        n = prompt(`Введите число > 100`, `101`)
    } while (+n <= 100);
    confirm(`Задание:\n${task7desc}\n`);
    task13_7();
};

function task13_7() {
    let n = prompt(`Введите верхнюю границу`, `100`);
    
    let message = `Простые числа - `;
    for(let i = 2; i <= +n; i++) {
        let count = 0;
        for(let d = 2; d <= i; d++) {
            if(i % d == 0) {
                count++;
            };
        };
        if(count == 1) {
            message = message + i + ', ';
        };
    };
    alert(message);
};



