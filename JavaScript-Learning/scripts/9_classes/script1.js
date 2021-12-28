function task9_1(){
    taskdesc = {
        1: 'Перепишите класс',
    };
    let tasklen = (Object.keys(taskdesc).length)
    inputTaskNumber9_1(tasklen);
};

function inputTaskNumber9_1(tasklen) {
    let taskAnswer = prompt('Введите номер задания по порядку:', 1);
    if (numbChecking(taskAnswer, tasklen)) {
        confirming9_1(+taskAnswer);
    } else {
        alert(`Введите число от 1 до ${tasklen}`);
    };
};

function confirming9_1(n) {
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

