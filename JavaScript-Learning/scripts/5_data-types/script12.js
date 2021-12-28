function task5_12(){
    taskdesc = {
        1: 'Преобразуйте объект в JSON, а затем обратно в обычный объект',
        2: 'Исключить обратные ссылки',
    };
    let tasklen = (Object.keys(taskdesc).length)
    inputTaskNumber5_12(tasklen);
};

function inputTaskNumber5_12(tasklen) {
    let taskAnswer = prompt('Введите номер задания по порядку:', 1);
    if (numbChecking(taskAnswer, tasklen)) {
        confirming5_12(+taskAnswer);
    } else {
        alert(`Введите число от 1 до ${tasklen}`);
    };
};

function confirming5_12(n) {
    let answer = confirm(`Задание № ${n}\n${taskdesc[n]}\n`)
    if(answer === true) {
        switch(n) {
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
    } else {
        return false;
    };
};

