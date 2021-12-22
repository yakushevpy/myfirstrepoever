function task5_8(){
    taskdesc = {
        1: 'Хранение отметок "не прочитано"',
        2: 'Хранение времени прочтения',
    };
    confirming(1);
};

function confirming(n) {
    let answer = confirm(`Задание № ${n}\n${taskdesc[n]}\n`)
    if(answer === true) {
        switch(n) {
            case 1:
                
                confirming(2);
                break;
            case 2: 
                
                
                break;
        };
    } else {
        return false;
    };
};


