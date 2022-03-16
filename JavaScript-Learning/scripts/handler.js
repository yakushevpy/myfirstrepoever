function numbChecking(numb,len) {
    if (numb <= len && numb > 0) {
        return numb;
    } else {
        return false;
    };
}

class TaskStarting {

    setNumber(tasklen){
        let taskAnswer = +prompt('Введите номер задания по порядку:', 1);
        if (taskAnswer) {
            if (this.numbChecking(taskAnswer, tasklen)) {
                return taskAnswer;
            } else {
                alert(`Введите число от 1 до ${tasklen}`)
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
}



//export default function() {}