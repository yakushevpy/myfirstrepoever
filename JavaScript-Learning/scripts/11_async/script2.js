function task11_2(){
    taskdesc = {
        1: 'Можно ли "перевыполнить" промис?',
        2: 'Задержка на промисах',
        3: 'Анимация круга с помощью промиса',
    };

    let tasklen = (Object.keys(taskdesc).length);
    let taskFunctions = new TaskFunctions();
    taskFunctions.getTaskDesc(tasklen,taskdesc);
    let taskNumber = taskFunctions.setNumber(tasklen);
    if (taskNumber) {
        let answer = taskFunctions.confirming(taskNumber, taskdesc)
        if (answer) taskRunning11_2(taskNumber);
    };
};

function taskRunning11_2(taskNumber) {
        switch(taskNumber) {
            case 1:
                
                break;
        };
};