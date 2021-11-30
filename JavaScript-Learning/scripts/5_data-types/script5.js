function task5_4(){
    taskdesc = {
        1: 'Переведите текст вида border-left-width в borderLeftWidth',
        2: 'Фильтрация по диапазону',
        3: 'Фильтрация по диапазону "на месте"',
        4: 'Сортировать в порядке по убыванию',
        5: 'Скопировать и отсортировать массив',
        6: 'Создать расширяемый калькулятор',
        7: 'Трансформировать в массив имён',
        8: 'Трансформировать в объекты',
        9: 'Отсортировать пользователей по возрасту',
        10: 'Перемешайте массив',
        11: 'Получить средний возраст',
        12: 'Оставить уникальные элементы массива',
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
                
                confirming(3);
                break;
            case 3:
                
                confirming(4);
                break;
            case 4: 
                
                confirming(5);
                break;
            case 5:
                
                confirming(6);
                break;
            case 6:
                
                confirming(7);
                break;
            case 7:
                
                confirming(8);
                break;
            case 8:
                
                confirming(9);
                break;
            case 9:
                
                confirming(10);
                break;
            case 10:
                
                confirming(11);
                break;
            case 11:
                
                confirming(12);
                break;
            case 12:
                
                
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