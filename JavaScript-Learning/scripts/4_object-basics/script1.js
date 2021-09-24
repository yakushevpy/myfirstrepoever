function task4_1(){
    task1desc = `   Плохой стиль`;

    confirm(`Задание:\n${task1desc}\n`);
    task4_1_1();
};

function task4_1_1() {
    alert(`
function pow(x,n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }; 
    return result;
};

let x = prompt("x?", ''), 
    n = prompt("n?", '')

if (n <= 0) {
    alert('Степень n не поддерживается, введите целую степень, большую 0');
} else {
    alert( pow(x,n) )
};
`)
};





