'use strict'

// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array"

/* function sevenBoom(arr) {

    
    for (let index = 0; index < arr.length; index++) {

        
        if (containsDigit(arr[index],7)) {
            return "Boom!";
        }
        
        
    }return "there is no 7 in the array";
}

function containsDigit(number, digit) {
    const numberString = number.toString();
    return numberString.includes(digit.toString());
  }

  console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
  console.log(sevenBoom([8, 6, 33, 100]));
  console.log(sevenBoom([2, 55, 60, 97, 86]));

 */


//   Tower of Hanoi
// Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.

/* function towerHanoi(discs) {
	return 2**discs-1;
}

console.log(towerHanoi(3));
console.log(towerHanoi(5));
console.log(towerHanoi(0)); */


// Number of Boomerangs
// Create a function that returns the total number of boomerangs in an array.

/* function countBoomerangs(arr) {
    var boomerang=0;

    for (let index = 0; index < arr.length-2; index++) {
        if (arr[index]==arr[index+2] && arr[index]!=arr[index+1]) {
            boomerang+=1;
        }
        
    }return boomerang;

}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]));
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ); */


/* const _ = require('./lodash')

function differenceWith(array, ...values) {
	let result = _.differenceWith(array,...values);
    return result
}

console.log(differenceWith([
    { make: "mazda", engine: "v8" },   // This is the first array we compare with.
    { make: "toyota",  engine: "v6" },
  ],
    [{ make: "toyota", engine: "v8" }],  // The second array we compare against.
    (a, b) => a.engine === b.engine    // This is the comparator that compares the two values.
  ));

 */

//   Oddish vs. Evenish

/* function oddishOrEvenish(num) {
    var sum = 0;

    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    if (sum%2==1) {
        return "Oddish"
    } else {
        return "Evenish"
    }
}

console.log(oddishOrEvenish(43));

console.log(oddishOrEvenish(373));

console.log(oddishOrEvenish(4433));
 */


// Create a function that takes two dates and returns the number of days between the first and second date.

/* function getDays(date1, date2) {
    let Difference_In_Time =
    date2.getTime() - date1.getTime();
    let Difference_In_Days =
        Math.round
            (Difference_In_Time / (1000 * 3600 * 24));
    return Difference_In_Days;
}

console.log(getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
  ) );

  console.log(getDays(
    new Date("December 29, 2018"),
  new Date("January 1, 2019")
  ) );

  console.log(getDays(
    new Date("July 20, 2019"),
  new Date("July 30, 2019")
  ) ); */



/* function getLength(arr) {
	return arr.flat(Infinity).length;
}

console.log(getLength([1, [2, 3]]));
console.log(getLength([1, [2, [3, 4]]]));
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));
console.log(getLength([1, [2], 1, [2], 1]) ); */


// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

/* function numInStr(arr) {
    var hasNmuber=[];
    for (let index = 0; index < arr.length; index++) {
    if (/\d/.test(arr[index])==true) {
        hasNmuber.push(arr[index]);
    }    
        
    }
    return hasNmuber;
}

console.log(numInStr(["1a", "a", "2b", "b"]) );
console.log(numInStr(["abc", "abc10"]) );
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]) );
console.log(numInStr(["this is a test", "test1"]) ); */



function combinations(...items) {
        var result=1;
        for (let index = 0; index < items.length; index++) {
            if (items[index]==0) {
                items[index]=1;
            }
            result *= items[index];
            
        }return result;
}

console.log(combinations(2, 3));
console.log(combinations(3, 7, 4));
console.log(combinations(2, 3, 4, 5));