function task5_3(){
    taskdesc = {
        1: 'Сделать первый символ заглавным',
        2: 'Проверка на спам',
        3: 'Усечение строки',
        4: 'Выделить число',
    };
    confirming(1);
};

function confirming(n) {
    let answer = confirm(`Задание № ${n}\n${taskdesc[n]}\n`)
    if(answer === true) {
        switch(n) {
            case 1:
                let tryes1 = ''
                for (let i = 1; i < 4; i++) {
                    let string1 = prompt(`Введите строку: (Попытка ${i} / 3)\n${tryes1}`, `васька`)
                    tryes1 = tryes1 + '\n' + i + '. \"' + string1 + '\" - ' + ucFirst(string1)
                }; 
                alert ( `Результаты:\n` + tryes1 )
                confirming(2);
                break;
            case 2: 
                let tryes2 = ''
                for (let i = 1; i < 4; i++) {
                    let string2 = prompt(`Введите строку: (Попытка ${i} / 3)\n-Поиск выполняется по словам 'viagra' или 'XXX'\n${tryes2}`, `дедуля шарит за xXx`)
                    tryes2 = tryes2 + '\n' + i + '. \"' + string2 + '\" - ' + checkSpam(string2)
                };
                alert ( `Результаты:\n` + tryes2 )
                confirming(3);
                break;
            case 3: 
                let tryes3 = ''
                for (let i = 1; i < 4; i++) {
                    let string3 = prompt(`Введите строку: (Попытка ${i} / 3)\n${tryes3}`, `Очень длинная строка, которую идеально было бы обрезать.`)
                    tryes3 = tryes3 + '\n' + i + '. ' + trancate(string3, 20)
                };
                alert ( `Результаты:\n` + tryes3 )
                confirming(4);
                break;
            case 4: ;
                amount = prompt('Введите стоимость в виде "$111"', '$12345')
                alert(extractCurrencyValue(amount));
                break;
        };
    } else {
        return false;
    };
};


function ucFirst(str) {
    str = str.trim();
    first = str[0].toUpperCase();
    string = first + str.slice(1);
    return string;
};

function checkSpam(str) {
    str = str.trim();
    lowerCaseStr = str.toLowerCase().trim();
    return (lowerCaseStr.includes('viagra') || lowerCaseStr.includes('xxx'));
};

function trancate(str, maxlength) {
    str = str.trim();
    strLen = str.length;
    if (strLen > maxlength) {
        parsedStr = str.substring(0, (maxlength-1));
        return (parsedStr + '...');
    } else {
        return str; 
    };
};

function extractCurrencyValue(amount) {
    a = amount.trim();
    lenA = a.length;
    a = a.substring(1, lenA);
    return a;    
}