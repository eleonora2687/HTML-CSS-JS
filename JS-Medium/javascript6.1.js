'use strict'

/* let stack=[];

stack.push(1);
stack.push(2);

console.log(stack);

stack.pop(-1);

console.log(stack);

let elem=stack.pop();

console.log(elem); */

/* let queue=[];
queue.push(1);
queue.push(2);

console.log(queue);

queue.shift(0);

console.log(queue);

queue.push(3);
queue.push(4);

queue.shift(0);

queue.push(5);

queue.shift(0);

console.log(queue); */

/* let array=[2,5,1,0,3];

//delete(array[0]);

console.log(array.splice(2,1));
console.log(array); */

/*let array=new Array(100);

 for (let index = 0; index < array.length; index++) {
    array[index]=Math.floor(Math.random()*101);
    
}
let exists=false;

for (let index = 0; index < array.length; index++) {
    if (array[index]==100) {
        exists=true;
    };
    
}
console.log(exists); */

function randomInt(min,max) {
    return Math.floor(Math.random()*(max-min)+min);

}

let x=10, y=40, z=9;

let array=new Array(x);


for (let index = 0; index < array.length; index++) {
    array[index]=new Array(y);
    for (let index1  = 0; index1 < 40; index1++) {
        array[index][index1]=new Array(z);
        for (let index2 = 0; index2 < 9; index2++) {
            array[index][index1][index2]=randomInt(0,5001);
            
        }
    }
    
}

console.log(array);

let exists=false;

label:for (let index = 0; index < 10; index++) {
    
    for (let index1  = 0; index1 < 40; index1++) {
        
        for (let index2 = 0; index2 < 9; index2++) {
            if(array[index2]===1123)
            {
                exists=true;
                break label;
            }
            
        }
    }
    
}
console.log(exists);
