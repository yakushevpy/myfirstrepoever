export {}

function greet(person:string, date:Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
   
greet('asda', new Date());

let message = 'hello world';
console.log(message);

let x = 10;
const y = 20; 
let sum;
const title = 'sum';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Vasya';
let sentence: string = `My name is ${name}
I am a beginner in TS`;
console.log(sentence)

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];
let person1: [string,number] = ['Pasha', 27];

enum Color {Red = 5, Green, Blue};
let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Pasha';

let myVariable: any = 10;
console.log(myVariable.name);
//myVariable();
//(myVariable as string).toUpperCase();

let a;
a = 10;
a = true;

let b = 20;
//b = 'nash';

let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = true;

let unkType: unknown;
unkType = 20;
unkType = true;

// functions in TS

function add(num1: number, num2?: number):number {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(5);

function add2(num1: number, num2: number = 10):number {
    if (num2)
        return num1 + num2;
    else
        return num1;
};
add2(5, 10);
add2(5);

// -----
interface Person {
    firstName: string;
    lastName?:string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} - ${person.lastName}`);
};

let p = {
    firstName: 'Pasha'//,
    //lastName: 'Yakushev'
};

fullName(p);
// -----

class Employee {
    employeeName: string;
    employeeLast: string;

    constructor(name?: string) {
        this.employeeName = name;
        this.employeeLast = name;
    }
    
  


    greet() {
        console.log(`Hello ${this.employeeName}`)
    }
    public changeName(name: string) {
        this.employeeName = name;
    }
}

let emp1 = new Employee('Pasha');
console.log(emp1.employeeName);
emp1.greet();

let emp2 = new Employee();
emp2.changeName('54');
console.log(emp2.employeeName);

