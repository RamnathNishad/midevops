//callback function: 

function sum(a,b,cb){
  console.log('sum started');
  setTimeout(()=>{
    let res=a+b;
    cb(res);
  },3000);  
}

console.log('main script started');
let a=100,b=200;
sum(a,b,(res)=>{
 console.log('result:',res);
}); 
console.log('main script ended');
