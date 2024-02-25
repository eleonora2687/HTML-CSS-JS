'use strict'

/* function hello() {
    console.log('hello world');
    
}

let myFunc=hello;
myFunc();

console.log(typeof myFunc, typeof hello, myFunc.name,hello.name); */

/* function factorial(x,...rest) {
    let result=x;
    for (let item of rest) {
        result*=item;
        
    }return result;
}

console.log(factorial(1,2,3,4,5)); */

/* function myFunc(a,b='default',c) {
    console.log(a,b,c);
}

myFunc();
myFunc(1);
myFunc(1,2);
myFunc(1,2,3);
myFunc(1,undefined,3) */

/* function myFunc(){
    for(let item of arguments)
    console.log(item);
}

myFunc(1,2,3); */

/* function myFunc(){
    for(let item of arguments)
    console.log(myFunc());
}

// myFunc(1,2,3); */

/* function average(x1,...rest){
    let cnt=1;
    for(let item of rest){
        if(typeof item==="number")
        {x1+=item;
        cnt++;}
    }
    console.log(cnt);
    return x1/cnt;
}

console.log(average(1,2,3,4,5)); */

/* function myFunc(x){
    console.log(`inside myFunc: ${x}`);
    x=2;
    console.log(`inside myFunc: ${x}`);

}

let a=1;
console.log(`outside myFunc: ${a}`);
myFunc(a);
console.log(`outside myFunc: ${a}`); */

/* function alterProperty(ar){
    ar.push(2);

}

function alterTable(ar){
    ar=[1,2,3,4,5];
}

let array=[1];
alterProperty(array);

console.log(`Altering a property: ${array}`);

alterTable(array);
console.log(`Altering the table: ${array}`);
 */

/* function max3(a,b,c){
    if(a>b && a>c)
    return a;
    else if(b>a && b>c)
    return b;
return c;
}

let max;
console.log(max3(1,2,3));

console.log(max3(3,2,1));
console.log(max3(3,3,2));
 */

/* function calculator(left,right,operand){
    return operand(left,right);
}

let add=calculator(2,3,function(a,b) {return a+b});
let sub=calculator(2,3,function(a,b) {return a-b});
let mult=calculator(2,3,function(a,b) {return a*b});
let div=calculator(2,3,function(a,b) {return a/b});

console.log(add,sub,mult,div); */

/* document.querySelector("#btn").addEventListener(
    "click",
    function()
    {console.log("clicked");}
) */


/* let calculator=(left, right, operand)=> {
    return operand(left, right);
}

let add = calculator(2, 3, function(a,b){return a+b});
let sub = calculator(2, 3, function(a,b){return a-b});
let mult=calculator(2,3,function(a,b) {return a*b});
let div=calculator(2,3,function(a,b) {return a/b});

console.log(add, sub, mult, div); */

document.querySelector("#btn").addEventListener(
    "click",
    ()=>
    {console.log("clicked");}
)