function task9_6(){
    taskdesc = {
        1: 'Странный instanceof',
    };

    let tasklen = (Object.keys(taskdesc).length);
    let taskFunctions = new TaskFunctions();
    taskFunctions.getTaskDesc(tasklen,taskdesc);
    let taskNumber = taskFunctions.setNumber(tasklen);
    if (taskNumber) {
        let answer = taskFunctions.confirming(taskNumber, taskdesc)
        if (answer) taskRunning9_6(taskNumber);
    };
};

function taskRunning9_6(taskNumber) {        
    switch(taskNumber) {
        case 1:
           alert(`Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().\n\nfunction A() {}\nfunction B() {}\nA.prototype = B.prototype = {};\nlet a = new A();\nalert( a instanceof B ); // true`)
           alert(`a = A = B.prototype, соответственно и является instanceof B\n\nНо вообще, в тренинге мы пропустили главу "Прототипы, наследование" и тем более __proto__`)
            break;
    };
};