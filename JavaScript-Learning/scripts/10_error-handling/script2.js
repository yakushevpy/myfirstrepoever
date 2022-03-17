function task10_2(){
    taskdesc = {
        1: 'Наследование от SyntaxError',
    };

    let tasklen = (Object.keys(taskdesc).length);
    let taskFunctions = new TaskFunctions();
    taskFunctions.getTaskDesc(tasklen,taskdesc);
    let taskNumber = taskFunctions.setNumber(tasklen);
    if (taskNumber) {
        let answer = taskFunctions.confirming(taskNumber, taskdesc)
        if (answer) taskRunning10_2(taskNumber);
    };
};

function taskRunning10_2(taskNumber) {
        switch(taskNumber) {
            case 1:
                class FormatError extends SyntaxError{
                    constructor(message){
                        super(message);
                        this.name = 'FormatError';
                    }
                };
                let err = new FormatError('Ошибка FormatError');
                alert(err.message);
                alert(err.name);
                alert(err.stack);
                alert( err instanceof FormatError );
                
                break;
        };
};