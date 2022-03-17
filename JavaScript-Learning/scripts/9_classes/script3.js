function task9_3(){
    taskdesc = {
        1: 'Класс расширяет объект?',
    };

    let tasklen = (Object.keys(taskdesc).length);
    let taskFunctions = new TaskFunctions();
    taskFunctions.getTaskDesc(tasklen,taskdesc);
    let taskNumber = taskFunctions.setNumber(tasklen);
    if (taskNumber) {
        let answer = taskFunctions.confirming(taskNumber, taskdesc)
        if (answer) taskRunning9_3(taskNumber);
    };
};

function taskRunning9_3(taskNumber) {        
    switch(taskNumber) {
        case 1:
          class Rabbit extends Object {
            constructor(name) {
              super(name);
              this.name = name;
            }
          }
          
          let rabbit = new Rabbit("Кроль");
          
          alert( rabbit.hasOwnProperty('name') ); 
            break;
    };
};