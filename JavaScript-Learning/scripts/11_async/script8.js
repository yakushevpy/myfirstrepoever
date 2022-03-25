function task11_8(){
    taskdesc = {
        1: 'Перепишите, используя async/await (1)',
        2: 'Перепишите, используя async/await (2)',
        3: 'Вызовите async–функцию из "обычной"'
    };

    let tasklen = (Object.keys(taskdesc).length);
    let taskFunctions = new TaskFunctions();
    taskFunctions.getTaskDesc(tasklen,taskdesc);
    let taskNumber = taskFunctions.setNumber(tasklen);
    if (taskNumber) {
        let answer = taskFunctions.confirming(taskNumber, taskdesc)
        if (answer) taskRunning11_8(taskNumber);
    };
};

function taskRunning11_8(taskNumber) {
        switch(taskNumber) {

            // Задание 1
            case 1:
                async function loadJson(url) {
                    let response = await fetch(url)
                    if (response.status == 200) {
                        return response.json();
                    } else {
                    throw new Error(response.status);
                        }
                      }
                                  
                loadJson('no-such-user.json') // (3)
                    .catch(alert); // Error: 404
                break;


            // Задание 2
            case 2: 
                class HttpError extends Error {
                    constructor(response) {
                      super(`${response.status} for ${response.url}`);
                      this.name = 'HttpError';
                      this.response = response;
                        }
                    }
                  
                async function loadJson1(url) {
                    let response = await fetch(url)
                    if (response.status == 200) {
                        return response.json();
                    } else {
                        throw new HttpError(response);
                    }
                }
                  
                  // Запрашивать логин, пока github не вернёт существующего пользователя.
                async function demoGithubUser() {
                    let name = prompt("Введите логин?", "iliakan");
                  
                    try {
                        let user = await loadJson1(`https://api.github.com/users/${name}`)
                        alert(`Полное имя: ${user.name}.`);
                        return user;
                    } catch(err) {
                        if (err instanceof HttpError && err.response.status == 404) {
                          alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
                          return demoGithubUser();
                        } else {
                          throw err;
                        };
                    };
                }
                  
                demoGithubUser();
                break;
            case 3:
                async function wait() {
                    await new Promise(resolve => setTimeout(resolve, 2000));
                  
                    return 10;
                }
                  
                function f() {
                    wait().then(waitAnswer=> alert(waitAnswer));
                }
                f();
                break;
                
        };
};