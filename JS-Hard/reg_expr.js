'use strict'

/* let regexp=new RegExp('Eleonora');
let regexp2=/name/;
let text='My name is Trikidou Eleonora';

console.log(text.search(regexp));
console.log(text.search(regexp2)); */


// flags

/* let regexp=new RegExp('name','i');
let regexp2=/Trikidou/i;

let text='My NaMes is EtrikidouZ';

console.log(text.search(regexp));
console.log(text.search(regexp2)); */

/* let regexp=/wqer.*tyr/i;
let regexp2=new RegExp('wretyukhgfdsQWEARTWasdf');

let text='AERTAQSZDCXdfwqerty   213qwrewqerasdfaesrfgrrtyhgqwerdtqawdesfrdf';

console.log(text.search(regexp)); */

/* let text='Computer Science has as much to do with computers as'

+' astronomy has to do with telescopes';

let regexp=/computer/ig;
let regexp2=new RegExp('computer','i');

console.log(text.match(regexp));
console.log(text.match(regexp2));

console.log(text.split(/ /));
console.log(text.split(/ /,3));

console.log(text.split(/computer/i));

console.log(text.replace(/computer/ig,'math'));
console.log(text.replace(/computer/i,'math'));
console.log(text.replaceAll(/computer/ig,'math')); */


/* let text='Computer Science has as much to do with computers as'

+' astronomy has to do with telescopes';

let regexp=/computer/ig;

while (regexp.test(text)) {
    console.log(regexp.lastIndex);
}

regexp=/computer/igd;

while (true) {
    let obj=regexp.exec(text);

    if (obj==null) {
        break;
    }
    console.log(regexp.lastIndex);
    console.log(obj);
} */

// .

/* let regexp=/a.b./;

console.log('abba'.search(regexp));
console.log('babarbz'.search(regexp));
console.log('aewrebsdfbaawerty'.search(regexp));
console.log('scacbbz'.search(regexp));
console.log('ASDQAxbawersd'.search(regexp)); */

/* let reg1=/a.../;
let reg2=/a..bb/;


console.log('   qw  Qaab'.search(reg1));
console.log('aabbaa'.search(reg2));
console.log('babab'.search(reg1));
console.log('abababab'.search(reg2));
 */

/* console.log('Nigeria'.search('.*er'));
console.log('Nigereria'.search('.*er'));
console.log('eria'.search('.*er'));

console.log('Mexico'.search('Me.*'));
console.log('Morocco'.search('Mo.*ro.*cco'));
console.log('Andorra'.search('.*rr.*'));
console.log('Burundi'.search('B(u.)*ndi')); */

console.log('aabbaa'.search(/a(..)*b/));
console.log('abababab'.search(/a(..)*b/));

console.log('aabbaa'.search(/a...b/));
console.log('abababab'.search(/a(..)*.b/));