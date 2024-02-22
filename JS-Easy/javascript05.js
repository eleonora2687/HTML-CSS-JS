'use strict'

/* for (let index = 1; index <= 55; index+=2) {
    console.log(index);
    
}

 */

/* for (let index = 120; index >= 0; index-=2) {
    console.log(index);
    
} */

/* let i=0;

do {
    console.log(`${i}^2 = ${i**2}`);
    i++;
} while (i<=100); */

/* let k=10;

while (k>=0) {
    console.log(k**2);
    k--;
}

 */
/* 
let k=10;

do {
    console.log(`${k*k}`);
    k-=1;
} while (k>=0); */

/* let i,j,k;
for (i=10,j=19,k=1;i<=20,j>=11,k<=29;i+=2,j-=2,k+=2) {
    
    if (k%3==0) {
        console.log(`${i} ${j} ${k}`);    
    }
    
    
} */

/* let i=10, j=19, k=1;

while (i<=20 && j>=11 && k <=29) {
    console.log(i + ' ' +j +' ');
    if(k%3==0)
        console.log(k);
    i+=2;
    j-=2;
    k+=2;
} */

/* let s='';

for (let index = 1; index <= 29 ; index+=2) {
    if (index%3==0) {
        s+=index + ' ';    
    }
    
    
}
console.log(s); */

/* let suma=0;

for (let index = 1; index <= 99; index+=2) {
    suma+=index;
    
}

console.log(suma); */

/* let n=Math.ceil(Math.random()*100);

while (n!=1) {
    if(n%2==0)
        n=n/2;
    else
        n=3*n+1;
    console.log(n);
} */

/* let index, j;

for (index = 1; index <= 10; index++) {
    for (j = 1; j <= 10; j++) {
        console.log(`${index} * ${j} = ${index*j}`);
        
    }
} */

/* let s;

for (let index = 1; index <=10; index++) {
    s='';
    for (let index1 = 1; index1 <=index; index1++) {
        s+='*';
        
    }
    console.log(s);
    
} */

const N=10;
let s;

for (let index = 0; index < N; index++) {
    s='';

    for (let index1 = 0; index1 < N-index-1; index1++) {
        s+=' ';

        
    }
    for (let index2 = 0; index2 < index+1; index2++) {
        s+='*';
        
    }
    
    console.log(s);
}