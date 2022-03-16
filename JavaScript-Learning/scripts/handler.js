class TaskFunctions {

    // Ввод номера задания
    setNumber(tasklen){
        let taskAnswer = +prompt(`Введите номер задания (Всего: ${tasklen})`, 1);
        if (taskAnswer) {
            if (this.numbChecking(taskAnswer, tasklen)) {
                return taskAnswer;
            } else {
                alert(`Введенного номера задания не существует`)
            };
        };
    }
    // Проверка введенного номера задания на наличие в разделе
    numbChecking(taskAnswer, tasklen){
        if (taskAnswer <= tasklen && taskAnswer > 0) {
            return taskAnswer;
        } else {
            return false;
        };
    }
    // Подтверждение с номером текущего задания
    confirming(taskNumber, taskDesc) {
        return  confirm(`Задание № ${taskNumber}\n${taskDesc[taskNumber]}\n`)
    }
    // Отображает alert со списком заданий в разеделе
    getTaskDesc(tasklen, taskdesc){
        let message = `\nЗадания в разделе:\n`
        for (let i=1; i <= tasklen; ++i) {
            message = message + `\n${i}. ${taskdesc[i]}`;
        };
        return alert(message);
    }
}