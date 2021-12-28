function task6_1(){
    taskdesc = {
        1: 'Преобразуйте объект в JSON, а затем обратно в обычный объект',
        2: 'Исключить обратные ссылки',
    };
    let tasklen = (Object.keys(taskdesc).length)
    inputTaskNumber6_1(tasklen);
};

function inputTaskNumber6_1(tasklen) {
    let taskAnswer = prompt('Введите номер задания по порядку:', 1);
    if (numbChecking(taskAnswer, tasklen)) {
        confirming6_1(+taskAnswer);
    } else {
        alert(`Введите число от 1 до ${tasklen}`);
    };
};

function confirming6_1(n) {
    let answer = confirm(`Задание № ${n}\n${taskdesc[n]}\n`)
    if(answer === true) {
        switch(n) {
            case 1:
                
                break;
            case 2: 
                
                break;
        };
    } else {
        return false;
    };
};

