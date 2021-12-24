function task5_9(){
    taskdesc = {
        1: 'Сумма свойств объекта',
        2: 'Подсчёт количества свойств объекта',
    };
    let tasklen = (Object.keys(taskdesc).length)
    inputTaskNumber5_9(tasklen);
};

function inputTaskNumber5_9(tasklen) {
    let taskAnswer = prompt('Введите номер задания по порядку:', 1);
    if (numbChecking(taskAnswer, tasklen)) {
        confirming5_9(+taskAnswer);
    } else {
        alert(`Введите число от 1 до ${tasklen}`);
    };
};

function confirming5_9(n) {
    let answer = confirm(`Задание № ${n}\n${taskdesc[n]}\n`)
    if(answer === true) {
        switch(n) {
            case 1:
                let salaries = {
                    "John": 100,
                    "Pete": 300,
                    "Mary": 250
                };
                alert(sumSalaries(salaries));
                break;
            case 2: 
                let user7 = {
                    name: 'John',
                    age: 30
                };
                alert(count(user7));
                break;
        };
    } else {
        return false;
    };
};

function sumSalaries(salaries) {
    let summ = 0;
    for (let salary of Object.values(salaries)) {
        summ += salary;
    };
    return summ;
};

function count(obj) {
    let count = 0;
    for (let salary of Object.keys(obj)) {
        count += 1;
    };
    return count;
};