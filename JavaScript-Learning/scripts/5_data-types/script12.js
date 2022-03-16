function task5_12(){
    taskdesc = {
        1: 'Преобразуйте объект в JSON, а затем обратно в обычный объект',
        2: 'Исключить обратные ссылки',
    };
    let tasklen = (Object.keys(taskdesc).length);
    let taskFunctions = new TaskFunctions();
    let taskNumber = taskFunctions.setNumber(tasklen);
    if (taskNumber) {
        let answer = taskFunctions.confirming(taskNumber, taskdesc)
        if (answer) taskRunning5_12(taskNumber);
    };
};

function taskRunning5_12(taskNumber) {
        switch(taskNumber) {
            case 1:
                let user = {
                    name: "Василий Иванович",
                    age: 35
                  };
                alert(`Look into console`)
                let jsons = JSON.stringify(user);
                console.log(jsons);
                let userAfterJson = JSON.parse(jsons);
                console.log(userAfterJson);
                break;
            case 2: 
                let room = {
                    number: 23
                };
              
                let meetup = {
                    title: "Совещание",
                    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
                    place: room
                };
                alert( JSON.stringify(meetup, function replacer(key, value) {
                    return value;
                }));
                console.log(JSON.stringify(meetup, function replacer(key, value) {
                    return value;
                }))
                break;
        };
};

