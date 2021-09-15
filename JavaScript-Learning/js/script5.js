function task8(){
    task1desc = `   Постфиксная и префиксная формы
Чему будут равны переменные a, b, c и d в примере ниже?`;
    task2desc = `   Результат присваивания
Чему будут равны переменные a и x после исполнения кода в примере ниже?`
    task3desc = `   Преобразование типов
Какой результат будет у выражений ниже?`
    task4desc = `Исправьте сложение
Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
В чём ошибка? Исправьте её. Результат должен быть 3.`
    confirm(`Задание:\n${task1desc}\n`);
    task8_1();
};


function task8_1(){
    alert(`a = 2\nb = 2\nc = 2\nd=1`);
    confirm(`Задание:\n${task2desc}\n`);
    task8_2();
};

function task8_2() {
    alert(`a = 4\nx = 5`)
    confirm(`Задание:\n${task3desc}\n`);
    task8_3();
}

function task8_3(){
    alert(`10
-1
1
2
6
9px
$45
2
NaN
NaN
-9  5
-14
1
NaN
-2`);
    confirm(`Задание:\n${task4desc}\n`);
    task8_4();
}

function task8_4() {
    let a = prompt(`Первое число?`, 1);
    let b = prompt(`Второе число?`, 2);
    alert(+a + +b)
}