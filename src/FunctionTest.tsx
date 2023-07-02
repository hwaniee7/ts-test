

function add1(num1:number, num2:number):void {
    console.log(num1 + num2);
}

function add2(num1:number, num2:number):number{
    return num1 + num2;
}
function hello(name?:string){
    return `Hello, ${name || "World!"}`;
}
function hello2(name = "Typescript!") {
    return `Hello, ${name}`;
}
function hello3(name:string, age?:number): string {
    if(age !==undefined){
        return `Hello, ${name}. You're ${age} years old`;
    } else {
        return `Hello, ${name}`;
    }
}
function hello4(age:number | undefined, name:string): string {
    if(age !==undefined){
        return `Hello, ${name}. You're ${age} years old`;
    } else {
        return `Hello, ${name}`;
    }
}
function sum(...nums:number[]) {
    return nums.reduce((result, num) => result + num, 0);
}
const FunctionTest = () => {
    add1(5, 5);
    const a = add2(10, 10);
    console.log(a);
    const sayHello = hello("영환!");
    const sayHelloWorld = hello();
    console.log(sayHello);
    console.log(sayHelloWorld);
    const sayHelloTS = hello2();
    console.log(sayHelloTS);
    console.log(hello3("Sam", 22));
    console.log(hello4(undefined,"Michael"));
    console.log(sum(1,2,3,4));
    console.log(sum(1,2,3,4,5,6,7,8,9,10));
;}
export default FunctionTest;