'use strict'
// try...catch

/* try {
    console.log(x);    
} catch (error) {
    console.log('Error: '+error);
} */


/* try {
    console.log(eval('x=1.2.3'));
} catch (error) {
    console.log('Error: '+error);
}

try {
    let a=new Array(2**50);
} catch (error) {
    console.log('Error: ' +error);
} */

// try...catch..finally

/* try {

    let array=new Array(123456789213456789);
    console.log(eval('x=1.2.3')); 
    
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log('Problem with eval');
    } else if(error instanceof RangeError){
        console.log('Problem with array');
    }else
    {
        console.log(error);
    }
    
}finally{
console.log('Today i m feeling quite terrible');
}

console.log('Hello world!'); */


/* function h() {
    let array=new Array(123456789123456789);
}

function g() {
    h();
}

function f() {
    try {
        g();
    } catch (foo) {
        console.log(foo);
    }
}

f(); */


/* function printException(error) {
    console.log(error);
    console.log(error.message);
    console.log(error.name);
    console.log(error.filename);
    console.log(error.lineNumber);
    console.log(error.columnNumber);
    console.log(error.stack);
}

/*try {
    let array=new Array(123456789123456789);
} catch (error) {
    printException(error);
    
}

let x=null;
printException(x); */


// URI

/*try {

    let encoded=encodeURI('https://pythontutor.com/render.html#mode=display');
    console.log(encoded);
    encoded=encodeURI('https\u{D800}pythontutor.com/render.html#mode=display');
    console.log(encoded);

} catch (error) {
    printException(error);
}

 */


// throw


class ValidationError extends Error{

    constructor(message){
        super(message);
        this.name='Validation Name';
    }
}

function foo(val) {
    if (!Number.isInteger(val)) {
        throw new TypeError('Values must all be integers');
    } else if(val<0){
        throw new RangeError('Values must be positive integers');
    }
    else if(val>50)
    {
        throw new RangeError('Values must equal to or lesser than fifty');
    }console.log('I m doing something with my input');
}
let array=['1',-1,60,'a',null,undefined,'',1.5];

for (const key of array) {
    try {
        foo(key);
    } catch (error) {
        console.log(error);
    }
}