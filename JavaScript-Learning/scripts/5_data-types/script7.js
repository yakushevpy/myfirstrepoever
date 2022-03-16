function task5_7(){
    taskdesc = {
        1: 'Фильтрация уникальных элементов массива',
        2: 'Отфильтруйте анаграммы',
        3: 'Перебираемые ключи',
    };
    let tasklen = (Object.keys(taskdesc).length);
    let taskFunctions = new TaskFunctions();
    taskFunctions.getTaskDesc(tasklen,taskdesc);
    let taskNumber = taskFunctions.setNumber(tasklen);
    if (taskNumber) {
        let answer = taskFunctions.confirming(taskNumber, taskdesc)
        if (answer) taskRunning5_7(taskNumber);
    };
};

function taskRunning5_7(taskNumber) {
    switch(taskNumber) {
            case 1:
                let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
                alert(unique(values));
                break;
            case 2: 
                let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
                alert(aclean(arr));
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

