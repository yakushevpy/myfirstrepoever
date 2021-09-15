function task11(){
    task1desc = `   Что выведет alert (ИЛИ)?
alert( null || 2 || undefined );`
    task2desc = `   Что выведет alert (ИЛИ)?
alert( alert(1) || 2 || alert(3) );`
    task3desc = `   Что выведет alert (И)?
alert( 1 && null && 2 );`
    task4desc = `   Что выведет alert (И)?
alert( alert(1) && alert(2) );`
    task5desc = `   Что выведет этот код?
alert( null || 2 && 3 || 4 );`
    task6desc = `   Проверка значения из диапазона
Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
«Включительно» означает, что значение переменной age может быть равно 14 или 90.`
    task7desc = `   Проверка значения вне диапазона
Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.`
    task8desc = `   Вопрос о "if"
Какие из перечисленных ниже alert выполнятся?
Какие конкретно значения будут результатами выражений в условиях if(...)?
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );`
    task9desc = `   Проверка логина
Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:
- Если введён пароль «Я главный», то выводить «Здравствуйте!»,
- Иначе – «Неверный пароль»,
- При отмене – «Отменено».`
    task11_1();
};


function task11_1(){
    alert(`${task1desc}\n---------- Ответ: ---- 
2`);
    task11_2();
};

function task11_2(){
    alert(`${task2desc}\n---------- Ответ: ---- 
Сработает alert(1), потом основной alert выдаст "2"`);
    task11_3();
};

function task11_3(){
    alert(`${task3desc}\n---------- Ответ: ---- 
'null'`);
    task11_4();
};

function task11_4(){
    alert(`${task4desc}\n---------- Ответ: ---- 
т.к. alert возвращает undefined, то сначала будет alert(1) а потом undefined`);
    task11_5();
};

function task11_5(){
    alert(`${task5desc}\n---------- Ответ: ---- 
4`);
    task11_6();
};

function task11_6(){
    alert(`${task6desc}\n---------- Ответ: ----
if (14 <= age && age <= 90)`);
    task11_7();
};

function task11_7(){
    alert(`${task7desc}\n---------- Ответ: ----
if (age < 14 || 90 < age)`);
    task11_8();
};

function task11_8(){
    alert(`${task8desc}\n---------- Ответ: ----
first (-1)
third (1)`);
    task11_9();
};

function task11_9(){
    alert(`${task8desc}\n---------- Ответ: ----
    let login = prompt('Введите логин', 'Админ');
    if (login == 'Админ') {
        let password = prompt('Введите пароль','Я главный');
        if (password == 'Я главный'){
            alert('Здравствуйте!')
        } else if (password == null){
            alert('Отменено')
        } else {
            alert('Неверный пароль')
        }
    } else if (login == null){
        alert('Отменено')
    } else {
        alert('Я вас не знаю')
    }`);
    task11_0();
    
};

function task11_0(){
    let login = prompt('Введите логин', 'Админ');
    if (login == 'Админ') {
        let password = prompt('Введите пароль','Я главный');
        if (password == 'Я главный'){
            alert('Здравствуйте!')
        } else if (password == null){
            alert('Отменено')
        } else {
            alert('Неверный пароль')
        }
    } else if (login == null){
        alert('Отменено')
    } else {
        alert('Я вас не знаю')
    }
}