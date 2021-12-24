function task5_10(){
    taskdesc = {
        1: 'Деструктурирующее присваивание',
        2: 'Максимальная зарплата',
    };
    let tasklen = (Object.keys(taskdesc).length)
    inputTaskNumber5_10(tasklen);
};

function inputTaskNumber5_10(tasklen) {
    let taskAnswer = prompt('Введите номер задания по порядку:', 1);
    console.log(taskAnswer)
    if (numbChecking(taskAnswer, tasklen)) {
        confirming5_10(+taskAnswer);
    } else {
        alert(`Введите число от 1 до ${tasklen}`);
    };
};

function confirming5_10(n) {
    let answer = confirm(`Задание № ${n}\n${taskdesc[n]}\n`)
    if(answer === true) {
        switch(n) {
            case 1:
                let user = {
                    name: "John",
                    years: 30
                };
                let {name, years:age, isAdmin=false} = user;
                alert(`name - ${name}\nage - ${age}\nisAdmin - ${isAdmin}`);
                break;
            case 2: 
                let salaries = {
                    "John": 100,
                    "Pete": 300,
                    "Mary": 250
                };
                alert(`Самый богатый в компании - ${topSalary(salaries).valueOwner} (${topSalary(salaries).maxValue} руб./месяц)`);
                break;
        };
    } else {
        return false;
    };
};

function topSalary(salaries) {
    let maxValue = 0;
    let valueOwner = '';
    for (let [name,value] of Object.entries(salaries)) {
        if (value>maxValue) {
            maxValue = value;
            valueOwner = name;
        };
    };
    return {valueOwner,maxValue};
};