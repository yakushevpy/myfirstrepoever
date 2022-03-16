function task5_5(){
    taskdesc = {
        1: 'Переведите текст вида border-left-width в borderLeftWidth',
        2: 'Фильтрация по диапазону',
        3: 'Фильтрация по диапазону "на месте"',
        4: 'Сортировать в порядке по убыванию',
        5: 'Скопировать и отсортировать массив',
        6: 'Создать расширяемый калькулятор',
        7: 'Трансформировать в массив имён',
        8: 'Трансформировать в объекты',
        9: 'Отсортировать пользователей по возрасту',
        10: 'Перемешайте массив',
        11: 'Получить средний возраст',
        12: 'Оставить уникальные элементы массива',
    };
    let tasklen = (Object.keys(taskdesc).length);
    let taskFunctions = new TaskFunctions();
    taskFunctions.getTaskDesc(tasklen,taskdesc);
    let taskNumber = taskFunctions.setNumber(tasklen);
    if (taskNumber) {
        let answer = taskFunctions.confirming(taskNumber, taskdesc)
        if (answer) taskRunning5_5(taskNumber);
    };
};

function taskRunning5_5(taskNumber) {
        switch(taskNumber) {
            case 1:
                let text = prompt('Введите строку', 'background-color');
                camelize(text);
                break;
            case 2: 
                let array = [5, 3, 8, 1];
                filterRange(array, 1, 4) // (array, minValue, maxValue)
                break;
            case 3:
                let array2 = [5, 3, 8, 1];
                array2 = filterRangeInPlace(array2, 1, 4);
                alert(array2);
                break;
            case 4: 
                let array3 = [5, 2, 1, -10, 8];
                array3.sort(sortByDowngrade);
                alert(array3);
                break;
            case 5:
                let array4 = ["HTML", "JavaScript", "CSS"];
                let sorted = copySorted(array4);
                alert(`Изначальный - ${array4}\nКопия - ${sorted}`);
                break;
            case 6:
                let calc = new Calculator;
                for (let i=0; i<3; i++) {
                    let strin = prompt(`Попытка ${i+1} из 3:\nВведите запрос в формате "a + b"`, `5 + 8`);
                    alert (calc.calculate(strin));
                };
                alert(`Теперь добавим в калькулятор функции умножения, деления и возведения в степень`);
                let powerCalc = new Calculator;
                powerCalc.addMethod("*", (a, b) => a * b);
                powerCalc.addMethod("/", (a, b) => a / b);
                powerCalc.addMethod("**", (a, b) => a ** b);
                alert(`powerCalc.addMethod("*", (a, b) => a * b);\npowerCalc.addMethod("/", (a, b) => a / b);\npowerCalc.addMethod("**", (a, b) => a ** b);`);
                alert(`Пробуем новые возможности!`);
                for (let i=0; i<3; i++) {
                    let strin = prompt(`Попытка ${i+1} из 3:\nВведите запрос в формате "a ** b"`, `5 ** 3`);
                    alert(powerCalc.calculate(strin));
                };
                break;
            case 7:
                let vasya = { name: "Вася", age: 25 };
                let petya = { name: "Петя", age: 30 };
                let masha = { name: "Маша", age: 28 };
                let users = [ vasya, petya, masha ];
                let names = users.map(item => item.name);
                alert(names);
                break;
            case 8:
                let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
                let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
                let masha1 = { name: "Маша", surname: "Петрова", id: 3 };
                let users1 = [ vasya1, petya1, masha1 ];
                let usersMapped = users1.map(user => ({fullname: `${user.name} ${user.surname}`, id: user.id}))
                alert(`usersMapped[0].id = ${usersMapped[0].id}\nusersMapped[0].fullname = ${usersMapped[0].fullname}`);
                break;
            case 9:
                let vasya2 = { name: "Вася", age: 25 };
                let petya2 = { name: "Петя", age: 30 };
                let masha2 = { name: "Маша", age: 28 };
                let arr2 = [ vasya2, petya2, masha2 ];
                arr2.sort(sortByAge);
                alert(`1 - ${arr2[0].name} (${arr2[0].age})\n2 - ${arr2[1].name} (${arr2[1].age})\n3 - ${arr2[2].name} (${arr2[2].age})`);
                break;
            case 10:
                let arr3 = [1, 2, 3];
                shuffle(arr3);
                alert(arr3);
                shuffle(arr3);
                alert(arr3);
                break;
            case 11:
                let vasya3 = { name: "Вася", age: 25 };
                let petya3 = { name: "Петя", age: 30 };
                let masha3 = { name: "Маша", age: 29 };
                let arr4 = [vasya3, petya3, masha3];
                alert(getAverageAge(arr4));
                break;
            case 12:
                let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
                alert(unique(strings));
                break;
        };
};



function camelize(str) {
    let arrayFromString = str.split('-');
    let newArray = arrayFromString.map(
        (item, index) => index == 0 ? item: item[0].toUpperCase() + item.slice(1)
    );
    return alert(newArray.join(''));
};

function filterRange(arr, min, max) {
    let newArray = arr.filter(
        (item) => item >= min && item <= max
    );
    return alert(newArray);
};

function filterRangeInPlace(arr, a, b) {
    return arr.filter(
        (item) => item >= a && item <= b
    )
};

function sortByDowngrade(a,b) {
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
};

function copySorted(arr) {
    let copy = arr.concat();
    return copy.sort();
};

function Calculator(str) {
    this.errors = {
        1: `Ошибка в формате данных: Не забывайте использовать пробел!`,
        2: `Ошибка в операции: Введенной операции не существует`,
        3: `Ошибка в числах: "a" и "b" должны быть числами!`,
    };
    this.operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    };
    this.calculate = function(str) {
        let calcArr = str.split(' ');
        let calcOperation = calcArr[1];
        let a = +calcArr[0];
        let b = +calcArr[2];
        if (!this.operations[calcOperation]) {
            return this.errors[1];
        } else if (a == NaN || b == NaN) {
            return this.errors[2];
        } else {
            return this.operations[calcOperation](a, b);
        };
    };
    this.addMethod = function(operation,desc) {
        this.operations[operation] = desc; 
    };
};

function sortByAge(a,b) {
    if (a.age > b.age) return 1;
    if (a.age == b.age) return 0;
    if (a.age < b.age) return -1;
};

function shuffle(arr) {
    for (let i =arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };
};

function shuffle2(arr) {
    arr.sort(() => Math.random() - 0.5);
};

function getAverageAge(users) {
    let ageSumm = 0;
    for (let i = 0; i < users.length; i++) {
        ageSumm += users[i].age;
    };
    let averageAge = ageSumm / users.length;
    return averageAge;
};

function unique(str) {
    let newUniqueArr = [];
    for (item of str) {
        if (!newUniqueArr.includes(item)) {
            newUniqueArr.push(item);
        };
    };
    return newUniqueArr;
};