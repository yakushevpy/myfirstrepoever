function task4_5() {
    taskdesc = {
        1: 'Проверка синтаксиса',
        2: 'Объясните значение "this"',
        3: 'Использование "this" в литерале объекта',
        4: 'Создайте калькулятор',
        5: 'Цепь вызовов',
    };
    confirm(`Задание:\n${taskdesc[1]}\n`);
    task4_5_1();
};


function task4_5_1() {

    confirm(`Задание:\n${taskdesc[2]}\n`);
    task4_5_2();
};

function task4_5_2() {
    
    confirm(`Задание:\n${taskdesc[3]}\n`);
    task4_5_3();
};

function task4_5_3() {
    alert('Вернет undefined');   
};
