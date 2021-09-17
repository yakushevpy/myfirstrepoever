function task2_15(){
    task1desc = `   Обязателен ли "else"?
Следующая функция возвращает true, если параметр age больше 18.
В ином случае она запрашивает подтверждение через confirm и возвращает его результат`;
    task2desc = `   Перепишите функцию, используя оператор '?' или '||'`;
    task3desc = `   Функция min(a, b)`
    task4desc = `   Функция pow(x,n)`
    confirm(`Задание:\n${task1desc}\n`);
    task2_15_1();
};


function task2_15_1(){
    alert(`Нет. 
Если >18 то вернет true
Если <18 то confirm`)
    confirm(`Задание:\n${task1desc}\n`);
    task2_15_2();
};

function task2_15_2() {
    alert(`return (age > 18) ? true : confirm('Родители разрешили?');
return (age > 18) || confirm('Родители разрешили?');`)
    confirm(`Задание:\n${task3desc}\n`);
    task2_15_3();  
};

function task2_15_3() {
    let a = +prompt(`Введите a`, `3`);
    let b = +prompt(`Введите b`, `5`);
    min(a,b)
    function min(a,b) {
        return (a > b) ? alert(b) : (a < b) ? alert(a) : alert(a)
    };
    confirm(`Задание:\n${task4desc}\n`);
    task2_15_4();
};

function task2_15_4() {
    let x = +prompt('Введите число', '2');
    let n = +prompt('В какую степень возвести?', '3');
    let answer = x
    for (let i = 1; i < n; i++) {
        answer *= x;
    }
    alert(answer);
};
