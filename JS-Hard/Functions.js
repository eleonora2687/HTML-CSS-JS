'use strict'

/* function outer() {
    function inner() {
        console.log('inner');
    }
    console.log('outer');
    inner();
    inner();
}

outer();
 */

/* function fibonacci(n) {
    function rec(n) {
        if (n===0) {
            return 0;
        } else if(n===1){
            return 1;
        }
        else{
            return rec(n-1)+rec(n-2);
        }
    }
    if (Number.isNaN(n) ||!Number.isInteger(n) || n<0) {
        return undefined;
    }
    else
        return rec(n);
}

console.log(fibonacci('two'),
fibonacci(-1),
fibonacci(5.5),
fibonacci(0),
fibonacci(10)
); */

/* function factory(a,b,c) {
    function polynomial(x) {
        return a*x**2+b*x+c;
    }
    return polynomial;
}

let myPolynomial=factory(1,1,1);
console.log(myPolynomial(2)); */
/* 
function counter() {
    let cnt=0;
    return function(){
        cnt++;
        return cnt;

    }
}

let cnt1=counter();
let cnt2=counter();

console.log(cnt1());
console.log(cnt1());
console.log(cnt2());
console.log(cnt2()); */

/* function factoryPower(base) {
    function toPower(power) {
        return base**power;
    }
    return toPower;
}

let powerOfTwo=factoryPower(2);
console.log(powerOfTwo(10));

let powerOfThree=factoryPower(3);
console.log(powerOfThree(3)); */

// scope

/* let x=0;

function outer() {
    let x=1;

    function inner() {
        let x=2;
        console.log(`Inner: ${x}`);
        if(1)
        {
            let x=3;
            console.log(`Inner: ${x}`);
        }
    }
    console.log(`Outer: ${x}`);
    inner();
}

console.log(`Global: ${x}`);
outer(); */

/* function outer() {
    function inner() {
        let z=2;
        console.log(`${x,y,z}`);
    }
    let y=1;
    console.log(`${x,y}`);
    inner();
}
let x=0;
console.log(`${x}`);
outer(); */


/* function myFunc() {
    console.log('Function');
}

console.log(myFunc());
console.dir(myFunc); */

/* function myFunc(params) {
    let y=1;
    console.log(x,y,params);
}

let x=0;
myFunc(2); */


/* function add(a)
{
    function additional(b) {
        return a+b;
    }
    return additional;

}

let add3=add(3);
console.log(add3(2));

let add10=add(10);
console.log(add10(10));
console.log(add10(2));
 */

function add(a)
{
    return function(b) {
        return a+b;
    }
    
}

let add3=add(3);
console.log(add3(2));

let add10=add(10);
console.log(add10(10));
console.log(add10(2));

console.log(`======`);

function countVowels(myString) {
    let cnt=0;
    for (let index = 0; index < myString.length; index++) {
        
        if (isVowel(myString[index])) {
            cnt++;
        }
        
    }return cnt;

    function isVowel(char) {
        return ('aeiouAUIOE'.includes(char)?true:false);
    }
}

console.log(countVowels('Eleonora TrIkIdoU'));