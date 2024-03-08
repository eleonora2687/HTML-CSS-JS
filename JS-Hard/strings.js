'use strict'

/* let str1=new String('My String'), str2=String('My String'), str3='My String';
console.log(str1,str2,str3, typeof str1, typeof str2,typeof str3);

let str='Trikidou Eleonora';
console.log(Object(str));

console.log(str.length);
console.log(str.charAt(9));
console.log(str.charCodeAt(9));
console.log(str.codePointAt(1));
console.log(str.concat(' ',str1,' ',str2,' ',str3));
console.log(str1.endsWith('ing'));
console.log(str.includes('riki',1));
console.log(str.indexOf('eo'));
console.log(str.lastIndexOf('o'));
console.log(str.localeCompare('Trikidou Eleonora','en-US'));
console.log(str.normalize('NFKD'));
console.log(str.padStart(10));
console.log(str.repeat(2));
console.log(str.slice(4));
console.log(str.split(13)); */

/* for (let pos in 'String') {
    console.log(`${pos}`);
}

for (let char of 'String') {
    console.log(`${char}`);
}

let str = 'Sample Samplest';
console.log(`${str.length}`);
console.log(`${str[2]}`);
console.log(`${str.indexOf('S',3)}`);
console.log(`${str.lastIndexOf('a')}`);
console.log(`${str.includes('le ')}`);
console.log(`${str.slice(2,6)}`);
console.log(`${str.concat(str)}`); */


/* function tagged(strings,arg1,arg2) {
    for (let s of strings) {
        console.log(s);
    }
    console.log(arg1);
    console.log(arg2);
    return arg1;
}

let result=tagged`Hello${'first'}world${'second'}!`;
console.log(result); */

/* let s='Factorial';

console.log(s.trimStart());
console.log(s.trimEnd());
console.log(s.trim());

let str='avbASDFGadsfasdf';
console.log(`${str.toLowerCase()}`);
console.log(`${str.toUpperCase()}`);

console.log(str);

let s1='abcd';
console.log(`${s1.padStart(10,'-')}`);
console.log(`${s1.padEnd(5,'-')}`);

s='  Eleonora 123';
console.log(`${s.toLowerCase()} ${s.trim()}`);
console.log(`${s.padStart(20)}`); */

/* let str='A sample string';

console.log(`${str[2]} ${str.charAt(2)}`);
console.log(`${str[str.length-1]} ${str.at(-1)}`);
console.log(`${str.substring(2,5)} ${str.slice(2,5)}`);

let splitted=str.split('    ');
console.log(`${splitted}`);

let joined=splitted.join('-');
console.log(joined);

let repeated=str.split('')[2].repeat(10);
console.log(repeated); */

let str='A sample string';

console.log(`${str.search(/s...e/)}`);
console.log(`${str.startsWith('sample',2)}`);
console.log(`${str.endsWith('string')}`);
console.log(`${str.match(/sample st/)}`);
console.log(`${str.replace('s','xa')}`);
console.log(`${str.replaceAll('s','x')}`);