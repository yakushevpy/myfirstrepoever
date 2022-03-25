function task11_3(){
    taskdesc = {
        1: 'Промисы: сравните then и catch',
        2: 'SecretTask',
    };

    let tasklen = (Object.keys(taskdesc).length);
    let taskFunctions = new TaskFunctions();
    taskFunctions.getTaskDesc(tasklen,taskdesc);
    let taskNumber = taskFunctions.setNumber(tasklen);
    if (taskNumber) {
        let answer = taskFunctions.confirming(taskNumber, taskdesc)
        if (answer) taskRunning11_3(taskNumber);
    };
};

function taskRunning11_3(taskNumber) {
        switch(taskNumber) {
            case 1:
                alert('В первом кейсе f2 выполнится только если f1 завершится с ошибкой\n1) promise.then(f1).catch(f2);\n2) promise.then(f1, f2);')
                break;
            case 2:
                let username = prompt('Введите username пользователя GitHub', 'yakushevpy')
                fetch (`https://api.github.com/users/${username}`)
                    .then(alert('Look left'))
                    .then(response => response.json())
                    .then(user => {
                        let img = document.createElement('img');
                        console.log(user)
                        img.src = user.avatar_url;
                        img.alt = user.login;
                        img.style = "width: 100px;";
                        img.className = "promise-avatar-example";
                        document.body.append(img);

                        setTimeout(() => img.remove(), 8000);
                    }) 
                break;
        };
};