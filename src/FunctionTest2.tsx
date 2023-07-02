
interface User {
    name:string;
}
const Sam: User = { name:'Sam'};
function showName1(this:User) {
    console.log(this.name);
};
const a = showName1.bind(Sam);

function showName2(this:User, age:number, gender:'m'|'f'){
    console.log(this.name, age, gender);
}
const b = showName2.bind(Sam);

const Jack: User = {name:'Jack'};
const showName3 = () => {
    console.log(Jack.name);
}

const FunctionTest2 = () => {
    a();
    b(30, 'm');
    showName3();
}

export default FunctionTest2;