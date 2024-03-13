'use strict'

/* let myDate=new Date();
let myDate1=new Date('2023-11-10T12:25:56');
let myDate2=new Date(myDate);

console.log(myDate);
console.log(myDate1);
console.log(Date());

let newDate=new Date('2024-3-13');

console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes());
console.log(newDate.getMonth());
console.log(newDate.getSeconds());
console.log(newDate.getTime());


let date=new Date(2020,3,6);
date.setMonth(4);
console.log(new Date(date));

date.setHours(56,60,67,1024);
console.log(date);


 */

/* let myDate=new Date('2021-05-30T00:00:12+03:00');

console.log(myDate); */

/* let myDate=new Date(2020,11,23,14,4,57);
console.log(myDate.toString());
console.log(myDate.toUTCString());


console.log(myDate.toDateString());
console.log(myDate.toTimeString());

 */

let myDate=new Date("2024-03-13T00:00:00");
console.log(myDate.toLocaleString('el-GR',{timeZone:'Europe/Paris'}));