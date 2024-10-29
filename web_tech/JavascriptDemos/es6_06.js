function sum(a,b){
 return new Promise((resolve,reject)=>{ 
    if(a==null || b==null){
        reject('a and b must not be empty')
    } else{
        resolve(a+b);
    }          
 })
}
let a =100,b=200;
sum(a,b).then(res=>{
    console.log('result:',res);
});