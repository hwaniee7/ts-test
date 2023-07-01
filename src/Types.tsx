import React from 'react';

import { Table } from 'reactstrap';


const Test:React.FC = () => {
    let nameStr:String = "이순신";
    let age:number = 30;
    let isAdult:boolean = true;
    let numArr1:number[] = [1, 2, 3, 4, 5];
    let numArr2:Array<number> = [6,7,8,9,10];
    let strArr1:string[] = ["봄", "여름", "가을","겨울"];
    let strArr2:Array<string> = ["Mon", "Tue", "Wed", "Thu", "Sat", "Sun"];

    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>나이</th>
                        <th>성인</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{nameStr}</td>
                        <td>{age}</td>
                        <td>{isAdult ? "성인" : ""}</td>
                    </tr>
                </tbody>
                <tfoot>
                </tfoot>
            </Table>
            <Table>
                <caption>(1) numArr1/numArr2</caption>
                <thead>
                </thead>
                <tbody>
                    <tr>
                    {numArr1.map((item, index)=>(
                        <td>{item}</td>
                    ))}
                    </tr>
                    <tr>
                    {numArr2.map((item, index)=>(
                        <td>{item}</td>
                    ))}
                    </tr>
                </tbody>
                <tfoot>
                </tfoot>
            </Table>
            <Table>
                <caption>(2) strArr1/strArr2</caption>
                <thead>
                </thead>
                <tbody>
                    <tr>
                    {strArr1.map((item, index)=>(
                        <td>{item}</td>
                    ))}
                    </tr>
                    <tr>
                    {strArr2.map((item, index)=>(
                        <td>{item}</td>
                    ))}
                    </tr>
                </tbody>
                <tfoot>
                </tfoot>
            </Table>
        </div>
       
    )

}

export default Test;


