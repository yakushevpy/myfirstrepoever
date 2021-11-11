function task4_4() {
    taskdesc = {
        1: 'Проверка синтаксиса',
        2: 'Объясните значение "this"',
        3: 'Использование "this" в литерале объекта',
        4: 'Создайте калькулятор',
        5: 'Цепь вызовов',
    };
    confirm(`Задание:\n${taskdesc[1]}\n`);
    task4_4_1();
};


function task4_4_1() {
    alert('Считерил, потому как не видел подвоха xD \nНо после проверки в боевых условиях понял, что отсутствует ";"')
    confirm(`Задание:\n${taskdesc[2]}\n`);
    task4_4_2();
};

function task4_4_2() {
    alert('1. Классическое обращение, все ок \n2. Второй вариант классики \n3. Сначала приравнивается, а потом смотрит значение, поэтому this = undefined \n4. Аналогично с п.3')
    confirm(`Задание:\n${taskdesc[3]}\n`);
    task4_4_3();
};

function task4_4_3() {
    alert('Вернет undefined');
    confirm(`Задание:\n${taskdesc[4]}\n`);
    task4_4_4();
};

function task4_4_4() {
    let calculator = {
        read: function() {this[1] = +prompt('Введите 1 значение', 10); this[2] = +prompt('Введите 2 значение', 50);},
        sum: function() {return this[1]+this[2];},
        mul: function() {return this[1]*this[2];},
    };
    calculator.read();
    alert(calculator.sum());
    alert(calculator.mul());
    confirm(`Задание:\n${taskdesc[5]}\n`);
    task4_4_5();
};

function task4_4_5() {
    let ladder = {
        step: 0,
        up() {
          this.step++;
          return this;
        },
        down() {
          this.step--;
          return this;
        },
        showStep: function() { // показывает текущую ступеньку
          alert( this.step + ' - Просто добавить в up() и down() "return this;"');
        }
    };
    ladder.up().up().down().showStep()  
}
