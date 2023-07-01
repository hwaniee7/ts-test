import React from "react"


const TupleTest = () => {

    // 튜플을 사용하여 학생 정보를 나타내는 타입 정의
    type Student = [string, number, boolean];

    // 학생 정보를 담은 튜플 배열
    let students: Student[] = [
        ["Alice", 22, true],
        ["Bob", 20, false],
        ["Carol", 21, true]
    ];

    // 튜플 배열을 순회하면서 학생 정보 출력
    students.forEach(([name, age, isMale]) => {
    console.log(`Name: ${name}, Age: ${age}, Gender: ${isMale ? 'Male' : 'Female'}`);
    });

}

export default TupleTest