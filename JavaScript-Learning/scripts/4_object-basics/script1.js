function task4_1(){
    task1desc = `   Привет, object`;
    task2desc = `   Проверка на пустоту`;
    task3desc = `   Объекты-константы?`;
    task4desc = `   Сумма свойств объекта`
    task5desc = `   Умножаем все числовые свойства на 2`;

    confirm(`Задание:\n${task1desc}\n`);
    task4_1_1();
};

function task4_1_1() {
    let user = {};
    user.name = 'John';
    user.surname = 'Smith';
    user.name = 'Pete';
    delete user.name;
    alert(`
    let user = {};
    user.name = 'John';
    user.surname = 'Smith';
    user.name = 'Pete';
    delete user.name;
    `);
    confirm(`Задание:\n${task2desc}\n`);
    task4_1_2();
};

function task4_1_2() {
    let schedule = {};
    confirm(isEmpty(schedule));
    schedule['8:30'] = "get up";
    alert(`obj '8:30' added`);
    alert(isEmpty(schedule));
    confirm(`Задание:\n${task3desc}\n`);
    task4_1_3();
};

function isEmpty(obj) {
    for(key in obj) {
        return true;
    };
    return false;
};

function task4_1_3() {
    alert(`Можно ли изменить объект?
    - Можно. А вот изменить значение самой переменной user - нельзя`)
    confirm(`Задание:\n${task4desc}\n`);
    task4_1_4();
};

function task4_1_4() {
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130,
    }
    let sum = 0;
    for(key in salaries) {
        if(key !="sum"){
            sum = sum + salaries[key];
        };
    };
    salaries.sum = sum;
    alert('sum = '+ salaries.sum);
    confirm(`Задание:\n${task5desc}\n`);
    task4_1_5();
};

function task4_1_5(){
    let menu = {
        width: 200,
        height: 300,
        title: 'My menu'
    };
    multiplyNumeric(menu);

};

function multiplyNumeric(obj) {
    for(let key in obj) {
        if(typeof obj[key] == 'number') {
            obj[key] = (obj[key] * 2) 
        }; 
    };
    alert('width = '+ obj.width + '\nheight = ' + obj.height + '\ntitle = ' + obj.title)
};






