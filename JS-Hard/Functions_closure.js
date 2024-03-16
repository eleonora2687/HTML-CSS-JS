'use strict'

// Lexical Scoping

/* let a=1;

function f() {
    return a;
}

function g() {
    let a=2;
    return f();

}

console.log(g()); */

// Closure

/* function counter() {
    let count=0;

    function inc() {
        count++;
        return count;
    }
    return inc;
}

let cnt=counter();
console.log(cnt());
console.log(cnt());
console.log(cnt());

let cnt1=counter();
console.log(cnt1());
console.log(cnt1()); */

// Private Object Variables

/* function createObject() {
    let somethingPrivate=0;

    function theObject() {
        let object={
            'key1':'value1',
            'key2':'value2'
        ,
        incPrivateValue(){
            somethingPrivate++;
        },
        getPrivateValue(){
            return somethingPrivate;
        }}
        return object;
    }
    return theObject();
}

let object=createObject();
object.incPrivateValue();

for (let key in object) {
    console.log(key);
}

console.log(object.getPrivateValue());
 */

/* function myPerson(name,age)
{
    
    return{
        getName: function()
        {
            return name;
        },
        setAge: function(newAge)
        {
            age=newAge;
           
        },
        getAge: function()
        {
            return age;
        },
        birthday: function()
        {
            age++;
        },
        toString()
        {
            return `${name} (${age})`;
        }

    }
    
}
let person=myPerson('John',22);
// person.setName('Mickey')
console.log(''+person);
person.birthday();
person.birthday();

console.log(''+person); */

// Currying


/* function multiply(a) {
    return function (b) {
        return function (c) {
            return a*b*c;
        }
    }
    
}

let mult=multiply(2);
console.log(mult(3)(4));

let mult1=mult(3);
console.log(mult1(4));


function not(a) {
    return !a;
}

function and(a) {
    return function (b) {
        return a&&b;
    }
}

function or(a) {
    return function (b) {
        return a||b;
    }
}

console.log(not(true));
console.log(and(true)(false));
console.log(or(true)(not(true))); */

/* function makeFunctions() {
    let funcs=[];

    for (let index = 45; index <= 54; index++) {
        function func() {
            return index;
        }
        funcs.push(func)
    }
    return funcs;
}
 
let functions=makeFunctions();
console.log(functions[9]());
*/
function makeFunctions() {
    let funcs=[];
    let index;

    for (index = 0; index < 10; index++) {
        function func() {
            return index;
        }
        funcs.push(func)
    }
    return funcs;
}

let functions=makeFunctions();
console.log(functions[5]());