import React from "react";
import { Table, Button } from "reactstrap";
import Swal from "sweetalert2";

interface Car {
    color:string,
    wheels:number,
    start(): void,
}
interface Benz extends Car {
    name?:string,
    door:number,
    stop():void,
}

class Bmw implements Car {
    color;
    wheels;
    constructor(color:string, wheels:number) {
        this.color=color;
        this.wheels=wheels;
    }
    start() {
        //console.log(" is running.");
        Sweetalert_start();
    }

}
const Sweetalert_stop = () =>{
    Swal.fire({
        text: 'stop!!',
        icon: 'warning',
        showConfirmButton: false,
        timer:2000
    })
}  
const Sweetalert_start = () => {
    Swal.fire({
        text: 'run!!',
        icon: 'success',
        showConfirmButton: false,
        timer:2000
    })
}
const InterfaceTest3:React.FC = () =>{
    const bmw = new Bmw("Blue", 4);
    const benz : Benz = {
        name: "Benz",
        door : 5,
        stop() {
            //console.log("stop");
            Sweetalert_stop();
           
        },
        color : "black",
        wheels : 4,
        start() {
            //console.log(" is running.");
            Sweetalert_start();
        }   
    }

    const handleBmwStart = () => {
        bmw.start();
    }
    const handleBenzStart = () => {
        benz.start();
    }
    const handleBenzStop = () => {
        benz.stop();
    }

    
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Color</td>
                        <td>Door</td>
                        <td>Wheels</td>
                        <td>Start</td>
                        <td>Stop</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{bmw.constructor.name}</td>
                        <td>{bmw.color}</td>
                        <td></td>
                        <td>{bmw.wheels}</td>
                        <td>
                            <Button color="success" onClick={handleBmwStart}>Start</Button>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>{benz.name}</td>
                        <td>{benz.color}</td>
                        <td>{benz.door}</td>
                        <td>{benz.wheels}</td>
                        <td>
                    
                            <Button color="success" onClick={handleBenzStart}>Start</Button>
                        </td>
                        <td>
                            <Button color="warning" onClick={handleBenzStop}>Stop</Button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>

                </tfoot>

            </Table>
        </>

    )
}

export default InterfaceTest3;