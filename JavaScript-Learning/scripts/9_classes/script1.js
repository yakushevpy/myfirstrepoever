
function task9_1(){
    taskdesc = {
        1: 'Перепишите класс',
    };
    
    let tasklen = (Object.keys(taskdesc).length)
    inputTaskNumber9_1(tasklen);
};

function inputTaskNumber9_1(tasklen) {
    let taskAnswer = prompt('Введите номер задания по порядку:', 1);
    if (numbChecking(taskAnswer, tasklen)) {
        confirming9_1(+taskAnswer);
    } else {
        alert(`Введите число от 1 до ${tasklen}`);
    };
};

function confirming9_1(n) {
    let answer = confirm(`Задание № ${n}\n${taskdesc[n]}\n`)
    if(answer === true) {
        switch(n) {
            case 1:
                class Clock {
        
                    constructor({ template }){
                        this.template = template;
                      }
            
                    render(){
                        let date = new Date();
                        
                        let hours = date.getHours();
                        if (hours < 10) hours = '0' + hours;
            
                        let mins = date.getMinutes();
                        if (mins < 10) mins = '0' + mins;
            
                        let secs = date.getSeconds();
                        if (secs < 10) secs = '0' + secs;
            
                        let output = this.template
                            .replace('h', hours)
                            .replace('m', mins)
                            .replace('s', secs);
                        
                        console.log(output);
                    };
            
                    start(){
                        this.render();
                        this.timer = setInterval(() => this.render(), 1000);
                    }
            
                    stop(){
                        clearInterval(this.timer);
                    }
                };
                let clock = new Clock({template: 'h:m:s'});
                let asking = alert('Часики тикают в консоли')
                clock.start();
                break;
        };
    } else {
        return false;
    };
};