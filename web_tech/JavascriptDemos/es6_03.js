//spread operator : arrays and object

let p1={
    ecode:101,
    ename:'Ravi'
}
let p2={...p1,'salary':1111};
p2.ename='Rohit';

console.log(p1);
console.log(p2);


let num1=[10,20,30];
let num2=[...num1];
num2.push(40);

//console.log(num1);
//console.log(num2);
