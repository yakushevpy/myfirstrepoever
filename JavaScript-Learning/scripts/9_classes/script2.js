function task9_2(){
    taskdesc = {
        1: 'Ошибка создания экземпляра класса',
        2: 'Улучшенные часы',
    };

    let tasklen = (Object.keys(taskdesc).length);
    let taskFunctions = new TaskFunctions();
    taskFunctions.getTaskDesc(tasklen,taskdesc);
    let taskNumber = taskFunctions.setNumber(tasklen);
    if (taskNumber) {
        let answer = taskFunctions.confirming(taskNumber, taskdesc)
        if (answer) taskRunning9_2(taskNumber);
    };
};

function taskRunning9_2(taskNumber) {        
    switch(taskNumber) {
        case 1:
            class Animal {

                constructor(name) {
                    this.name = name;
                }
              
            }

              class Rabbit extends Animal {
                constructor(name) {
                    super(name);
                    this.created = Date.now();
                }
            }
              
              let rabbit = new Rabbit("Белый кролик");
              alert(`rabbit.name - ${rabbit.name}\nrabbit.created - ${rabbit.created}`);
            break;
        case 2:
            class Clock {
                constructor({ template }) {
                  this.template = template;
                }
              
                render() {
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
                }
              
                stop() {
                  clearInterval(this.timer);
                }
              
                start() {
                  this.render();
                  this.timer = setInterval(() => this.render(), 1000);
                }
            }
              
            class ExtendedClock extends Clock {
                constructor(newbie){
                    super(newbie);
                    let {precision=1000} = newbie
                    this.precision = precision
                }
                start() {
                    this.render();
                    this.timer = setInterval(() => this.render(), this.precision);
                }
            }
            alert(`let clock = new ExtendedClock({template: 'h:m:s', precision:5000});\nclock.start();\n\nЧасы теперь будут обновляться каждые 5 сек`)
            let clock = new ExtendedClock({template: 'h:m:s', precision:5000});
            clock.start();
            break;
    };
};