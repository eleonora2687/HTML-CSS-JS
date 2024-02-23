'use strict'

/* let n=Math.floor(Math.random()*10 +1);

let s;

console.log(n);

for (let index = 0; index < n; index++) {
    s='';
    for (let index1 = 0; index1 <n-1-index; index1++) {
        s+=' ';
        
    }
    for (let index2 = 0; index2 < 2*index+1; index2++) {
        s+='*';
        
    }
    console.log(s);
    
} */

/* let n=Math.floor(Math.random()*10 +1);

let s;

console.log(n);

for (let index = n; index >= 1; index--) {
    s='';
    for (let index1 = n-index; index1 >0; index1--) {
        s+=' ';
        
    }
    for (let index2 = 2*index-1; index2 >=index; index2--) {
        s+='*';
        
    }
    console.log(s);
    
} */

/* let n=Math.floor(Math.random()*10 +1);

let s;

console.log(n);

for (let index = n; index >= 1; index--) {
    s='';
    for (let index1 = n-index; index1 >0; index1--) {
        s+=' ';
        
    }
    for (let index2 = 2*index-1; index2 >=1; index2--) {
        s+='*';
        
    }
    console.log(s);
    
} */

/* let myArray=new Array(10);

myArray=[Math.floor(Math.random()*10),2,3,12,5,6,,8,9,10];

console.log(myArray);

let yes=false, i;

for (let index = 0; index < myArray.length; index++) {
    if (myArray.includes(12)) {
        yes=true;
        i=myArray.indexOf(12);
        break;
    }
    
}
if (yes) {
    console.log(`${i}: ${myArray[i]}`);
}

else
    console.log('no');

 
 */
let myArray = [
        [1,2,3], 
        [1,2,3],
        [1,2,3],
        [1,2,3]
        ];
for (let index = 0; index < 4; index++) {
    for (let index1 = 0; index1 < 3; index1++) {
        myArray[index][index1]=Math.floor(Math.random()*10);
    }
    
}

let s;
for (let index = 0; index <4; index++) {
    s='';
    for (let index1 = 0; index1 <3; index1++) {
        s+=' '+myArray[index][index1]+' ';
    }
    console.log(`[${s}]`);
} 

let sumRows;

for (let index = 0; index <4; index++) {
    sumRows=0;
    for (let index1 = 0; index1 <3; index1++) {
        sumRows+=myArray[index][index1];
    }
    console.log(`[${sumRows}]`);
} 

let sumCol;

for (let index = 0; index <3; index++) {
    sumCol=0;
    for (let index1 = 0; index1 <4; index1++) {
        sumCol+=myArray[index1][index];
    }
    console.log(`[${sumCol}]`);
} 

