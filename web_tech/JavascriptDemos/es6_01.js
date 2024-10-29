//var vs let vs const
//var is global scope or function level
//let and const are block level scope
//const cannot be modified

function demo(){
    let x=100;
    for(let x=1;x<=10;x++){
        console.log('x=',x);
    }
    console.log('x=',x);
}

demo();