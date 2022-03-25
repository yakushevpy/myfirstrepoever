function task12_1(){
    taskdesc = {
        1: 'Псевдослучайный генератор',
    };

    let tasklen = (Object.keys(taskdesc).length);
    let taskFunctions = new TaskFunctions();
    taskFunctions.getTaskDesc(tasklen,taskdesc);
    let taskNumber = taskFunctions.setNumber(tasklen);
    if (taskNumber) {
        let answer = taskFunctions.confirming(taskNumber, taskdesc)
        if (answer) taskRunning12_1(taskNumber);
    };
};

function taskRunning12_1(taskNumber) {
        switch(taskNumber) {
            case 1:
                
                break;
        };
};