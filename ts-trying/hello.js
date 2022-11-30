"use strict";
exports.__esModule = true;
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet('asda', new Date());
var message = 'hello world';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'sum';
var isBeginner = true;
var total = 0;
var name = 'Vasya';
var sentence = "My name is ".concat(name, "\nI am a beginner in TS");
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Pasha', 27];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'Pasha';
var myVariable = 10;
console.log(myVariable.name);
//myVariable();
//(myVariable as string).toUpperCase();
var a;
a = 10;
a = true;
var b = 20;
//b = 'nash';
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = true;
var unkType;
unkType = 20;
unkType = true;
// functions in TS
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(5);
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
;
add2(5, 10);
add2(5);
function fullName(person) {
    console.log("".concat(person.firstName, " - ").concat(person.lastName));
}
;
var p = {
    firstName: 'Pasha' //,
    //lastName: 'Yakushev'
};
fullName(p);
// -----
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
        this.employeeLast = name;
    }
    Employee.prototype.greet = function () {
        console.log("Hello ".concat(this.employeeName));
    };
    Employee.prototype.changeName = function (name) {
        th;
        is.employeeName = name;
    };
    return Employee;
}());
var emp1 = new Employee('Pasha');
console.log(emp1.employeeName);
emp1.greet();
var emp2 = new Employee();
emp2.changeName('54');
console.log(emp2.employeeName);
