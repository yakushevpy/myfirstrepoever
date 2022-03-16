function task5_1(){
    taskdesc = {
        1: 'Можно ли добавить свойство строке?',
    };

    let tasklen = (Object.keys(taskdesc).length);
    let taskFunctions = new TaskFunctions();
    taskFunctions.getTaskDesc(tasklen,taskdesc);
    let taskNumber = taskFunctions.setNumber(tasklen);
    if (taskNumber) {
        let answer = taskFunctions.confirming(taskNumber, taskdesc)
        if (answer) taskRunning5_1(taskNumber);
    };
};

function taskRunning5_1(taskNumber) {  
    switch(taskNumber) {
        case 1: 
            alert('Даже если свойство создастся, оно не сохранится. Т.к. строка не содержит в себе свойств');
        break;
    }   
};








