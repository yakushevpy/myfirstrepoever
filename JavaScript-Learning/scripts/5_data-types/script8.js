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
                alert('Я бы сделал новый Set \nlet isAlreadyReadedSet = new Set()\nи после прочтения добавлял бы в него messageId\nisAlreadyReadedSet.add({messageId})\nНо тут нет messageId, и условие требует удаления инфы, когда к ней нет доступа. Поэтому придется добавлять объект смс\nisAlreadyReadedWeakSet.add(messages[0]) в WeakSet') 
                confirming(2);
                break;
            case 2: 
                alert('В данном кейсе уже помимо самого сообщения придется временно хранить и время прочтения. Соответственно берем WeakMap messageReadedDate.add(message[0], {date})')                
                break;
        };
    } else {
        return false;
    };
};