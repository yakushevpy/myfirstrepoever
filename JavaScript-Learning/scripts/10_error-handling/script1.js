function task10_1(){
    taskdesc = {
        1: 'Finally или просто код?',
    };

    let tasklen = (Object.keys(taskdesc).length);
    let taskFunctions = new TaskFunctions();
    taskFunctions.getTaskDesc(tasklen,taskdesc);
    let taskNumber = taskFunctions.setNumber(tasklen);
    if (taskNumber) {
        let answer = taskFunctions.confirming(taskNumber, taskdesc)
        if (answer) taskRunning10_1(taskNumber);
    };
};

function taskRunning10_1(taskNumber) {
        switch(taskNumber) {
            case 1:
                alert('Разница в деталях)')
                break;
        };
};