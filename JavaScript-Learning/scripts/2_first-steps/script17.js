function task2_17(){
    task1desc = `   Перепишите с использованием функции-стрелки`;
    confirm(`Задание:\n${task1desc}\n`);
    task2_17_1();
};


function task2_17_1(){
    let ask = (question, yes, no) => {
        if (confirm(question)) yes()
        else no();
    };

    ask( `Вы согласны?`, 
    () => {alert(`Вы согласились`);}, 
    () => {alert(`Вы отказались`);}
    );
};
