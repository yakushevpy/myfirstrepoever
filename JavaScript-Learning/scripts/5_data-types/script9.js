function task5_9(){
    taskdesc = {
        1: 'Сумма свойств объекта',
        2: 'Подсчёт количества свойств объекта',
    };
    let tasklen = (Object.keys(taskdesc).length);
    let taskFunctions = new TaskFunctions();
    taskFunctions.getTaskDesc(tasklen,taskdesc);
    let taskNumber = taskFunctions.setNumber(tasklen);
    if (taskNumber) {
        let answer = taskFunctions.confirming(taskNumber, taskdesc)
        if (answer) taskRunning5_9(taskNumber);
    };
};

function taskRunning5_9(taskNumber) {
        switch(taskNumber) {
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