

interface Add {
    (num1:number, num2:number):number;
}
interface IsAdult {
    (age:number):boolean;
}

const InterfaceTest2 = () => {
    const add : Add = (x, y) => {
        return x * y;
    }
    console.log(add(10, 15));
    
    const age: IsAdult = (age) =>{
        return age > 19;
    }
    console.log(age(33));
}
export default InterfaceTest2;