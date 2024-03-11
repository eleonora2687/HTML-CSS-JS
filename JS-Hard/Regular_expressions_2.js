'use strict'

// quantifiers

/* console.log('abb'.search(/ab+/));
console.log('abb'.search(/ab{3,}/));
console.log("abab".search(/(ab){2}/));
console.log('abab'.search(/(ab){3}/));
console.log('XabbY'.search(/(a?b){2}/));
console.log('XabbY'.search(/(a?b)+/));
console.log('abb'.search(/ab+/));
console.log("abab".search(/(z?z?))); */

// quantifiers_reluctant

/* console.log('aa'.match(/a+/));
console.log('aa'.match(/a+?/));
console.log('abaaacd'.search(/ab.*cd/));
console.log('abaaacd'.search(/ab.*?cd/)); */

// escape

/* console.log('a+a+'.match(/a+a+/));
console.log('a+ba'.match(/a\+.a+/));

let regexp=new RegExp('a\\+.a+/');
console.log('a+ba'.match(regexp));
 */
// special_characters

/* console.log('\\'.match(/\\/));
console.log('\\'.match(new RegExp('\\\\')));
 */
/* let multiLine=
`Line 1
 Line2
 Line 3
 `;

 console.log(multiLine.match('\n')); */

//  OR and character groups
/* 
let text='computers are to Computer Science no more than' + 'telescopes are to astronomy';

let regexp=/Sci.*? |comp.*?/g;
console.log(...text.matchAll(regexp));
 */

/* let text='210-11-21-222, 210-12-34-222';

let regexp=/(...)-(..)-(..)-(...)/ig;

let matches=text.matchAll(regexp);

for (let match of matches) {
    console.log(match,match.index,match.length);
} */

// groups of characters

// character_classes

/* console.log('etrikidou@gmail.com'.search(/[a-zA-Z0-9]{8,30}@gmail\.com/));
console.log('1.etrikidou@gmail.com'.search(/[a-zA-Z0-9]{8,30}@gmail\.com/));
console.log('e-trikidou-21@gmail.com'.search(/[a-zA-Z0-9_-]{8,30}@gmail\.com/));
console.log('etrikidou-21@gmail.com'.search(/[a-zA-Z]+[0-9_-]*@gmail\.com/));
 */

// predefined_character_classes

/* let pattern=/([0-1]\d|2[0-3]):[0-5]\d/;
console.log('01:49'.search(pattern));
console.log('11:69'.search(pattern));
console.log('24:14'.search(pattern));
console.log('23:59'.search(pattern));

 */

/* let pattern=/([0-1]\d|2[0-3]):[0-5]\d(\.\d{1,4})?/;
console.log('01:49'.search(pattern));
console.log('11:19.123'.search(pattern));
console.log('23:14.12345'.search(pattern));
console.log('25:59'.search(pattern));

 */

/* let text='XXwordXX';
let regexp=/word/;
let regexp1=/^word/;
let regexp2=/word$/;
let regexp3=/^word$/;


console.log(text.search(regexp));
console.log(text.search(regexp1));
console.log(text.search(regexp2));
console.log(text.search(regexp3));

let pattern = /([0-1]\d|2[0-3]):[0-5]\d(\.\d{1,4})?/;
  console.log("23:14.12345".search(pattern));
  pattern = /^([0-1]\d|2[0-3]):[0-5]\d(\.\d{1,4})?$/;
  console.log("23:14".search(pattern));
 */


let text = "Computer Science is no more about computers " +
  "than astronomy is about telescope";

let regexp = /\bscope/i;
console.log(text.search(regexp));

let regexp2 = /\Bscope/i;
console.log(text.search(regexp2));

let regexp3 = /(\bcomputer\B)/ig;
console.log([...text.matchAll(regexp3)]);