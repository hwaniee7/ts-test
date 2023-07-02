interface User {
    name:string;
    age:number;
}

//함수 오버로드
function join(name:string, age:number): User;
function join(name:string, age:string): string;
function join(name:string, age:number | string): User | string {
    if(typeof age === 'number'){
        return {
            name,
            age,
        };
    } else {
        return "나이는 숫자로 입력해주세요.";
    }
}

const FunctionTest3 = () => {
    const sam:User = join("Sam", 30);
    const jane:string = join("Jane", "30");
    console.log(sam);
    console.log(jane);
}

export default FunctionTest3;