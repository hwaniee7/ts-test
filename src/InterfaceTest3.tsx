

interface Car {
    color:string,
    wheels:number,
    start(): void,
}

class Bmw implements Car {
    color;
    wheels;
    constructor(color:string, wheels:number) {
        this.color=color;
        this.wheels=wheels;
    }
    start() {
        console.log(" is running.");
    }

}
const InterfaceTest3 = () =>{
    const car = new Bmw("Blue", 4);
    console.log("name: " + car.constructor.name + ", color: " + car.color + ", wheels: " + car.wheels);
    car.start()
}

export default InterfaceTest3;