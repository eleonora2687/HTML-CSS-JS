'use strict'

/*
let playerA='Μάνος';
let playerB='Ελεονώρα';

let diceA= Math.floor((Math.random()*10)%6+1);
let diceB= Math.floor((Math.random()*10)%6+1);


if (diceA > diceB) {
    console.log('The winner is' + ' ' + playerA);
}
else if (diceA < diceB) {
    console.log('The winner is' + ' ' + playerB);
}
else
    console.log('Ισοπαλία');
*/


//ternary operator

/* let x=-5;
let abs=(x>=0? x : -x);
console.log(abs); */

/* let x=500;

let sign=(x<0?-1:x===0?0:1);
console.log(sign);
 */

// ?? operator

/* let x=null;
let y=undefined;
let z='10'+'a';
let w=0;

console.log(x??y??z??w); */

//switch-case

/* let value=3;
let s='';

switch (value) {
    case 1:
        s+='one'
        break;
    case 2:
        s+='two'
        break;
    case 3:
        s+='three'
        break;
            
    default:
        s+='other';
        break;
}

console.log(s); */

/* let x = -8;
let s='';

switch (x) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        s+='less than or equal to 5';
        break;
    
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        s+='greater than 5, less than or equal to 10';
        break;

    default:
        s+='other';
        break;
}

console.log(s); */

/* let hour=3;
let minute=8;
let second=3;
let currentTime='';

if (hour >= 0 && hour < 60 && minute >= 0 && minute < 60 && second >= 0 && second < 60) {
    currentTime += (hour<9?'0'+hour:hour) +':' + (minute<9?'0'+minute:minute) + ':' + (second<9?'0'+second:second);
    
}

console.log(currentTime); */

//variable scope

let x=5;

{
    let x=8;
    console.log(x);

    let y=10;
    console.log(y);
}

console.log(x);
console.log(y); // error