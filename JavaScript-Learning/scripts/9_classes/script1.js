function task9_1(){
    taskdesc = {
        1: 'Перепишите класс',
    };

    let tasklen = (Object.keys(taskdesc).length);
    let taskFunctions = new TaskFunctions();
    taskFunctions.getTaskDesc(tasklen,taskdesc);
    let taskNumber = taskFunctions.setNumber(tasklen);
    if (taskNumber) {
        let answer = taskFunctions.confirming(taskNumber, taskdesc)
        if (answer) taskRunning9_1(taskNumber);
    };
};

function taskRunning9_1(taskNumber) {
        switch(taskNumber) {
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
};