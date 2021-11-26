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
                let styles = ['Джаз', 'Блюз',];
                alert('step 1: '+ styles)
                              
                styles.push('Рок-н-ролл');
                alert('step 2: '+ styles);
                fixedn = ((styles.length) / 2).toFixed() - 1
                styles[fixedn] = 'Классика';
                alert('step 3: '+ styles);
                alert('step 4: '+ styles.shift())
                styles.unshift('Рэп', 'Регги')
                alert('step 5: '+ styles)
                confirming(3);
                break;
            case 3:
                alert('Ответ:\na,b,function')
                confirming(4);
                break;
            case 4: 
                sumInput();
                confirming(5);
                break;
            case 5:
                
                break;
        };
    } else {
        return false;
    };
};



function sumInput(){
    let n = +prompt('Введите число!\n(Чтобы завершить ввод, введите не числовое значение)');
    let answer = [];
    while (Number.isInteger(n)) {
        answer.push(n);
        n = +prompt('Введите число!\n(Чтобы завершить ввод, введите не числовое значение)');
    };
    alert(answer);
}; // добавить сумму

