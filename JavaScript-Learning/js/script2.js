function task4(){
    task1desc = `   Работа с переменными.\n
1. Объявите две переменные: admin и name.
2. Запишите строку "Джон" в переменную name.
3. Скопируйте значение из переменной name в admin.
4. Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).`;
    task2desc = `   Придумайте правильные имена.\n
1. Создайте переменную для названия нашей планеты. Как бы вы её назвали? 
2. Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?`;
    task3desc = `   Какие буквы (заглавные или строчные) использовать для имён констант?\n`
    confirm(`Задание:\n${task1desc}\n`);
    task4_1();
};


function task4_1(){
    let admin;
    let name;
    name = 'Джон'
    admin=name;
    alert(`Значение переменной admin - ${admin}`);
    confirm(`Задание:\n${task2desc}\n`);
    task4_2();
};

function task4_2(){
    let ourPlanetName;
    let currentUserName;
    alert(`Название нашей планеты - ourPlanetName \nИмя текущего посетителя сайта - currentUserName`);
    confirm(`Задание:\n${task3desc}\n`);
    task4_3();    
};

function task4_3(){
    alert(`const BIRTHDAY = '18.04.1982\nconst age = somecode(BIRTHDAY)`)
}