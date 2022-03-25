function task11_4(){
    taskdesc = {
        1: 'Ошибка в setTimeout',
    };

    let tasklen = (Object.keys(taskdesc).length);
    let taskFunctions = new TaskFunctions();
    taskFunctions.getTaskDesc(tasklen,taskdesc);
    let taskNumber = taskFunctions.setNumber(tasklen);
    if (taskNumber) {
        let answer = taskFunctions.confirming(taskNumber, taskdesc)
        if (answer) taskRunning11_4(taskNumber);
    };
};

function taskRunning11_4(taskNumber) {
        switch(taskNumber) {
            case 1:
                alert('Нет, ошибку выкинет позже, чем обработается catch')
                break;
        };
};