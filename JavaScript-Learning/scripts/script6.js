function task6(){
    task1desc = `   Простая страница\n
Создайте страницу, которая спрашивает имя у пользователя и выводит его.`;
    confirm(`Задание:\n${task1desc}\n`);
    task6_1();
};


function task6_1(){
    let currentUserName = prompt(`Салямалекум, как тебя называть?`, 'Меня не зовут, я сам прихожу')
    alert(`Ответ: "${currentUserName}" засчитан!`)
};
