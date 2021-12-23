function task5_7(){
    taskdesc = {
        1: 'Фильтрация уникальных элементов массива',
        2: 'Отфильтруйте анаграммы',
        3: 'Перебираемые ключи',
    };
    confirming5_7(1);
};

function confirming5_7(n) {
    let answer = confirm(`Задание № ${n}\n${taskdesc[n]}\n`)
    if(answer === true) {
        switch(n) {
            case 1:
                let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
                alert(unique(values));
                confirming5_7(2);
                break;
            case 2: 
                let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
                alert( aclean(arr) );
                confirming5_7(3);
                break;
            case 3:
                let map = new Map();
                map.set("name", "John");
                let keys = Array.from(map.keys());
                console.log(keys);
                keys.push("more");
                console.log(keys);
                alert(keys);
                break;
        };
    } else {
        return false;
    };
};

function unique(arr) {
    let set = new Set(arr);
    let arrAgain = Array.from(set);
    return arrAgain;
};

function aclean(arr) {
    let map = new Map();
    for (let word of arr) {
        let letters = word.toLowerCase().split("").sort().join("")
        map.set(letters, word);
    };
    return Array.from(map.values());
};

