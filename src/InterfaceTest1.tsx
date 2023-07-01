import React from "react";
import { Table } from "reactstrap";

type Rank = "사장" |  "이사" | "부장" | "과장" | "대리" | "사원";
  
interface User {
    name:string,
    age:number,
    gender?:string,
    isAdult?:boolean,
    readonly birthday:Date;
    rank:Rank,
}

const InterfaceTest1:React.FC = () => {
    let user : User = {
        name:"홍길동",
        age:25,
        gender:"남성",
        isAdult:true,
        birthday: new Date("1998-06-20"),
        rank:"사원"
    } 
    return(
        <Table>
            <thead>
            </thead>
            <tbody>
                <tr>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.isAdult ? "성인" : ""}</td>
                    <td>{user.isAdult}</td>
                    <td>{user.rank}</td>
                </tr>
            </tbody>
            <tfoot>
            </tfoot>
        </Table>
    )

}
export default InterfaceTest1;