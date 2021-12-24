function task5_4(){
    taskdesc = {
        1: 'Скопирован ли массив?',
        2: 'Операции с массивами',
        3: 'Вызов в контексте массива',
        4: 'Сумма введённых чисел',
        5: 'Подмассив наибольшей суммы',
    };
    let tasklen = (Object.keys(taskdesc).length)
    inputTaskNumber5_4(tasklen);
};

function inputTaskNumber5_4(tasklen) {
    let taskAnswer = prompt('Введите номер задания по порядку:', 1);
    if (numbChecking(taskAnswer, tasklen)) {
        confirming5_4(+taskAnswer);
    } else {
        alert(`Введите число от 1 до ${tasklen}`);
    };
};

function confirming5_4(n) {
    let answer = confirm(`Задание № ${n}\n${taskdesc[n]}\n`)
    if(answer === true) {
        switch(n) {
            case 1:
                alert('Ответ:\nfruits.length = 4')
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
                break;
            case 3:
                alert('Ответ:\na,b,function')
                break;
            case 4: 
                sumInput();
                break;
            case 5:
                alert( getMaxSubSum([-1, 2, 3, -9]) ); 
                alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); 
                alert( getMaxSubSum([-2, -1, 1, 2]) );
                alert( getMaxSubSum([1, 2, 3]) );
                alert( getMaxSubSum([100, -9, 2, -3, 5]) );
                break;
        };
    } else {
        return false;
    };
};



function sumInput() {
    let n = +prompt('Введите число!\n(Чтобы завершить ввод, введите не числовое значение)');
    let answer = [];
    while (Number.isInteger(n) && Number.isFinite(n) && Number.isSafeInteger(n)) {
        answer.push(n);
        n = +prompt('Введите число!\n(Чтобы завершить ввод, введите не числовое значение)');
    };
    alert(answer);
    let sum = 0;
    for (let item of answer) {
        sum += item; 
    };
    alert(sum);
};

function getMaxSubSum(arr) {
    let sum = 0;
    let sumItem = 0;
    for (let item of arr) {
        sumItem += item;
        sum = Math.max(sum, sumItem);
        if (sumItem < 0) {
            sumItem = 0;
        }
    }
    return sum;
}