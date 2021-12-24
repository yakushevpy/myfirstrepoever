function task5_11(){
    taskdesc = {
        1: 'Создайте дату',
        2: 'Покажите день недели',
        3: 'День недели в европейской нумерации',
        4: 'Какой день месяца был много дней назад?',
        5: 'Последнее число месяца?',
        6: 'Сколько сегодня прошло секунд?',
        7: 'Сколько секунд осталось до завтра?',
        8: 'Форматирование относительной даты',
    };
    let tasklen = (Object.keys(taskdesc).length)
    inputTaskNumber5_11(tasklen);
};

function inputTaskNumber5_11(tasklen) {
    let taskAnswer = prompt('Введите номер задания по порядку:', 1);
    console.log(taskAnswer)
    if (numbChecking(taskAnswer, tasklen)) {
        confirming5_11(taskAnswer);
    } else {
        alert(`Введите число от 1 до ${tasklen}`);
    };
};

function confirming5_11(n) {
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

                break;
            case 6:

                break;
            case 7:

                break;
            case 8:

                break;
        };
    } else {
        return false;
    };
};


function getWeekDay(date) {
    let dayOfTheWeeks = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    return dayOfTheWeeks[date.getDay()];
};

function getLocalDay(date) {
    let dayOfTheEuroWeek = date.getDay();
    if (dayOfTheEuroWeek == 0) {
        dayOfTheEuroWeek = 7;
    };
    return dayOfTheEuroWeek;
};

function getDateAgo(date, minus) {
    let newDateAgo = new Date(date);
    newDateAgo.setDate(date.getDate() - minus);
    return newDateAgo.getDate();
};