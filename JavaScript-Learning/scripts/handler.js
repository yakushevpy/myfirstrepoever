class TaskFunctions {

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
    numbChecking(taskAnswer, tasklen){
        if (taskAnswer <= tasklen && taskAnswer > 0) {
            return taskAnswer;
        } else {
            return false;
        };
    }
    confirming(taskNumber, taskDesc) {
        return  confirm(`Задание № ${taskNumber}\n${taskDesc[taskNumber]}\n`)
    }
}