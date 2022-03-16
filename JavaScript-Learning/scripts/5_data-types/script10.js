function task5_10(){
    taskdesc = {
        1: 'Деструктурирующее присваивание',
        2: 'Максимальная зарплата',
    };
    let tasklen = (Object.keys(taskdesc).length);
    let taskFunctions = new TaskFunctions();
    let taskNumber = taskFunctions.setNumber(tasklen);
    if (taskNumber) {
        let answer = taskFunctions.confirming(taskNumber, taskdesc)
        if (answer) taskRunning5_10(taskNumber);
    };
};

function taskRunning5_10(taskNumber) {
        switch(taskNumber) {
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