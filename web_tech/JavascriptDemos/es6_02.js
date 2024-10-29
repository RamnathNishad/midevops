//arrow function

function sum(a,b){
    return a+b;
}

let subtract=function(a,b){
 return a-b;
}

let multiply=(a,b)=>{
 return a*b;
};
let a=100,b=200;
console.log('sum:', sum(a,b));
console.log('subtract:',subtract(a,b));
console.log('Multiply:',multiply(a,b));