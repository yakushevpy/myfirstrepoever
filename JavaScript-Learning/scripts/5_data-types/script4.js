function task5_4(){
    taskdesc = {
        1: 'Скопирован ли массив?',
        2: 'Операции с массивами',
        3: 'Вызов в контексте массива',
        4: 'Сумма введённых чисел',
        5: 'Подмассив наибольшей суммы',
    };
    confirming(1);
};

function confirming(n) {
    let answer = confirm(`Задание № ${n}\n${taskdesc[n]}\n`)
    if(answer === true) {
        switch(n) {
            case 1:
                alert('Ответ:\nfruits.length = 4')
                confirming(2);
                break;
            case 2: 
                
                confirming(3);
                break;
            case 3: 
                
                confirming(4);
                break;
            case 4: 
                
                confirming(5);
                break;
            case 5:
                
                break;
        };
    } else {
        return false;
    };
};

