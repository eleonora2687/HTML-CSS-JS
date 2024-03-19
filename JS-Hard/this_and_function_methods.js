'use strict'

// this_methods

// an object

/* let ob={
    x:1,
    f:function(){return this.x}
}

console.log(ob.f());
 */
// A constructor function

/* function Constructor() {
    this.x=1;
}

Constructor.prototype.f=function(){return this;};

let ob2=new Constructor();
console.log(ob2.f()); */

// A class

/* class Class
{
    constructor()
    {this.x=1}
    method()
    {
        return this;
    }
}

let ob3=new Class();
console.log(ob3.method());
 */
// console.log(this);

// A function

/* function myfunc1() {
    return this;
}

console.log(myfunc1());

 */
// on inner functions

/* function outer() {
    function inner() {
        return this;
    }
    return inner();
}
outer(); */

// this_in_arrow_functions

// an arrow function enclosed in global EC

// console.log((()=>this)());

// an arrow function enclosed in function EC

/* function name() {
    console.log((()=>this)());
}

name(); */


// An arrow function as a method

/* let ob={
    x:1,
    f:()=>this
}

console.log(ob.f()); */

// call(), apply() methods

/* function greet(greeting,question) {
    console.log(`${greeting}, my name is ${this.name} ${question}`);
}

const person1={name:'John'};
const person2={name:'Ron'};

greet.call(person1,'Hello','How is it going');
greet.apply(person2,['Hi','Is everything alright']); */

// advanced usages

// call usage

/* let object1={
    name: 'Tom',
    toString(){
        console.log(this.name);
    }
}

let object2={
    name:'Bob'
}

object1.toString.call(object2); */

// call_usage2

/* let array=[1,2,3,4,5];

function max() {
    let v=arguments[0];
    
    for (const iterator of arguments) {
        if (iterator>v) {
           v=iterator;
        }
    }return v;
}

console.log(max(...array)); */



/* let utils={

count: function (value) {
    
    let cnt=0;
    for (let i = 0; i < this.length; i++) {
        if (this[i]===value) {
            cnt++;
        }
        
    }
    return cnt;
}

}

let data = {
    0: 1,
    1: 2,
    2: 1,
    length: 3

  }
 */

// console.log(utils.count.call(data, 1)); 

/* let utils = {
    count: function(value) {
        let cnt = 0;
        for (let i=0; i<this.length; i++) {
            if (this[i]===value)
                cnt++;
        }
        return cnt;
    }
}

let data = {
    0: 1,
    1: 2,
    2: 1,
    length: 3
}

console.log(utils.count.call(data, 1)); */

//  bind method

/* function greet(greeting, question) {
    console.log(`${greeting}, my name is ${this.name}. ${question}`);
}

const person1={name: 'Tom'};
const person2={name: 'Bob'};

let greetTom=greet.bind(person1,"Hello",'How are you doing?');
let greetBob=greet.bind(person2,"Hi",'How is it going?');



greetTom();
greetTom();

greetBob();
greetBob();
 */


/* let object={
    x:1,
    getX: function () {
        return this.x;
    }
}

let extracted=object.getX.bind(object);
console.log(extracted());

console.log(extracted.bind(object)()); */

let piko = {
    name: "piko",
    type: "dog",
    toString() {
        return `${this.name} (${this.type})`;
    }
}
let miou = {
    name: "miou",
    type: "cat"
}

console.log(`${piko}, ${piko.toString.apply(miou)}`);


/* function f() {
    console.log("hey");
}
 */
//console.log(f);
/*console.log(f.toString,f.toString());

f.toString =()=>'f';

console.log(f.toString,f.toString()); */


