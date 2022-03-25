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
                
                function* pseudoRandom(seed) {
                    let value = seed;
                    while (true) {
                        value = value * 16807 % 2147483647; 
                        yield value;
                    }
                }
                let seed = prompt('Введите seed (значение должно быть 0 < x < 10)',1);
                if ( (+seed < 10) && (+seed > 0) ) {
                    let generator = pseudoRandom(seed);
                    alert(generator.next().value);
                    alert(generator.next().value); 
                    alert(generator.next().value);
                } else {
                    alert(`Введенное значение (${seed}) не удовлетворяет условиям.\nУсловия: \n-число\n-меньше 10\n-больше 0`);
                    throw new Error(`Введенное значение (${seed}) не удовлетворяет условиям.`);
                }
                break;
        };
};