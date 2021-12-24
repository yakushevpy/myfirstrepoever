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
                let date = new Date(2012,1,20,3,12)
                alert(date);
                break;
            case 2: 
                let date1 = new Date(2012, 0, 3);
                alert(getWeekDay(date1));
                break;
            case 3:
                let date2 = new Date(2021, 11, 19);
                alert(`ВС - ${getLocalDay(date2)} (19.12.2021)`);
                break;
            case 4:
                let date3 = new Date(2015, 0, 2);
                alert( getDateAgo(date3, 1) ); // 1, (1 Jan 2015)
                alert( getDateAgo(date3, 2) ); // 31, (31 Dec 2014)
                alert( getDateAgo(date3, 365) ); // 2, (2 Jan 2014)
                break;
            case 5:
                alert(getLastDayOfTheMonth(+prompt('Введите год:', 2012),+prompt('Введите месяц: (0-январь, 1-февраль...)',1)))
                break;
            case 6:
                alert(`Сегодня прошло секунд - ${getSecondsToday()}\nЧто равно: \n${Math.round(getSecondsToday()/60/60)} ч. / ${Math.round(getSecondsToday()/60)} мин. / ${getSecondsToday()} сек.\n(коряво округлено до целых)`);
                break;
            case 7:
                alert(`До завтра осталось секунд - ${getSecondsToTomorrow()}\nЧто равно: \n${Math.round(getSecondsToTomorrow()/60/60)} ч. / ${Math.round(getSecondsToTomorrow()/60)} мин. / ${getSecondsToTomorrow()} сек.\n(коряво округлено до целых)`);
                break;
            case 8:
                alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
                alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
                alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
                alert( formatDate(new Date(new Date - 86400 * 1000)) );
                break;
        };
    } else {
        return false;
    };
};

