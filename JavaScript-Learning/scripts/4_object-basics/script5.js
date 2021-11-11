function task4_5() {
    taskdesc = {
        1: 'Две функции - один объект',
        2: 'Создание калькулятора при помощи конструктора',
        3: 'Создаём Accumulator',
        //4: 'Создайте калькулятор',
        //5: 'Цепь вызовов',
    };
    confirm(`Задание:\n${taskdesc[1]}\n`);
    task4_5_1();
};


function task4_5_1() {
    alert(`Возможно
    ------------
    let name = {
        fistname: 'John',
    };
    function A() {return name;};
    function B() {return name;};
    alert( new A(name) == new B(name) );
    `)
    let name = {
        fistname: 'John',
    };
    function A() {return name;};
    function B() {return name;};
    alert( new A(name) == new B(name) );
    confirm(`Задание:\n${taskdesc[2]}\n`);
    task4_5_2();
};

function task4_5_2() {
    alert(`
    function Calculator() {
        this.read = function(){this.x = +prompt('первое число', 1); this.y = +prompt('второе число', 2)};
        this.sum = function(){return this.x + this.y;};
        this.mul = function() {return this.x * this.y;};
    }
    
    let calculator = new Calculator();
    calculator.read();
    alert( "Sum=" + calculator.sum() );
    alert( "Mul=" + calculator.mul() );
    `)
    function Calculator() {
        this.read = function(){this.x = +prompt('первое число', 1); this.y = +prompt('второе число', 2)};
        this.sum = function(){return this.x + this.y;};
        this.mul = function() {return this.x * this.y;};
    }
    let calculator = new Calculator();
    calculator.read();

    alert( "Sum=" + calculator.sum() );
    alert( "Mul=" + calculator.mul() );


    confirm(`Задание:\n${taskdesc[3]}\n`);
    task4_5_3();
};

function task4_5_3() {
    alert(`
    function Accumulator(startingValue) {
        this.value = startingValue;
        this.read = function(){ this.y = +prompt('введите число',1); return this.value = this.value + this.y; };
    };
    let accumulator = new Accumulator(1); // начальное значение 1

    accumulator.read(); // прибавит ввод prompt к текущему значению
    accumulator.read(); // прибавит ввод prompt к текущему значению

    alert(accumulator.value);   
    `)
    function Accumulator(startingValue) {
        this.value = startingValue;
        this.read = function(){ this.y = +prompt('введите число',1); return this.value = this.value + this.y; };
    };
    let accumulator = new Accumulator(1); // начальное значение 1

    accumulator.read(); // прибавит ввод prompt к текущему значению
    accumulator.read(); // прибавит ввод prompt к текущему значению

    alert(accumulator.value);   
};
