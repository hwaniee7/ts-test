import React from 'react';

import { Table } from 'reactstrap';


const Test:React.FC = () => {
    let nameStr:String = "이순신";
    let age:number = 30;
    let week:string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>나이</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{nameStr}</td>
                        <td>{age}</td>
                    </tr>
                </tbody>
                <tfoot>
                </tfoot>
            </Table>
            <Table>
                <thead>
                    <tr>
                    {week.map((item, index)=>(
                            <td key={index}>{item}</td>
                    ))}
                    </tr>
                </thead>
                <tbody>
                </tbody>
                <tfoot>
                </tfoot>
            </Table>
        </div>
       
    )

}

export default Test;


