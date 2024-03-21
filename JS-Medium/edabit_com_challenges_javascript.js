'use strict'


// How much is True?

/* function countTrue(arr) {
        let count=0;
        for (let index = 0; index < arr.length; index++) {
            if (arr[index]===true) {
                count++;
            }
            
        }return count;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([])); */


/* let array=[];

for (let index = 0; index < 10; index++) {
    array.push((Math.floor(Math.random() * 10))%2);
    
}
console.log(array);

let count=0;

for (let index = 0; index < array.length; index++) {
    if (array[index]) {
        count++;
    }
    
}
console.log(count);

 */

// A redundant function

/* function redundant(str) {

   function name() {
     return str;
   }
   return name;
    
}

const f1 = redundant("apple")
const f2 = redundant("pear")
const f3 = redundant("")

console.log(f1());
console.log(f2());
console.log(f3());


 */


// Create a function that will return an integer number corresponding to the amount of digits in the given integer num

/* function num_of_digits(num)
{
    return Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;
}

console.log(num_of_digits(13456765432));

 */

/* function rightShift(number, steps) {
    return Math.floor(number/2**steps);
}

console.log(rightShift(-512, 10)); */

// Tile Teamwork Tactics

/* function possibleBonus(a, b) {
    

     if (a>=b) {
        return false;
     }
     else{
     for (let index = 1; index < 7; index++) {
        if (a+index>=b) {
            return true;
        }
        
     }}
     return false;
}

console.log(possibleBonus(5, 3)); */

/* Write a function that takes a number and returns the perimeter of either a circle or a square. 
The input will be in the form (letter l, number num) 
where the letter will be either "s" for square, or "c" for circle, 
and the number will be the side of the square or the radius of the circle */

/* function perimeter(l, num){
    
    try {
        if (l==='s') {
            return 4*num;
        }
        else if(l==='c')
            return 6.28*num;
    } catch (error) {
        console.log('Wrong input');
    }
}


console.log(perimeter('s', 2));
console.log(perimeter('c',1)); */


/* function addName(obj, name, value) {

    obj[name]=value;
    return obj;
}

console.log(addName({}, "Brutus", 300));

console.log(addName({ piano: 500 }, "Brutus", 400));
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440)); 

 */
/* function derivative(b, m) {
        return b*(m**(b-1));
}

console.log(derivative(1, 4));
console.log(derivative(3, -2));
console.log(derivative(4, -3)); */

/* function generation(x, y) {
        if (x===0) {
            return `me!`;
        }
        else if(x>0 && y==='f')
        {
            if (x===1) {
                return `daughter`;
            }
            else if(x===2)
            {
                return `granddaughter`;
            }
            else if(x===3)
            {
                return `great granddaughter`;
            }
        }
        else if(x>0 && y==='m')
        {
            if (x===1) {
                return `son`;
            }
            else if(x===2)
            {
                return `grandson`;
            }
            else if(x===3)
            {
                return `great grandson`;
            }
        }
        else if(x<0 && y==='f')
        {
            if (x===-1) {
                return `mother`;
            }
            else if(x===-2)
            {
                return `grandmother`;
            }
            else if(x===-3)
            {
                return `great grandmother`;
            }
        }
        else if(x<0 && y==='m')
        {
            if (x===-1) {
                return `father`;
            }
            else if(x===-2)
            {
                return `grandfather`;
            }
            else if(x===-3)
            {
                return `great grandfather`;
            }
        }
}

console.log(generation(2, "f"));

console.log(generation(-3, "m"));

console.log(generation(1, "f")); */



// Find the nth Tetrahedral Number

/* A tetrahedron is a pyramid with a triangular base and three sides. A tetrahedral number is a number of items within a tetrahedron.

Create a function that takes an integer n and returns the nth tetrahedral number.

 */

/* function tetra(n) {
	let sum=0;
    for (let index = 0; index < n+1; index++) {
        for (let index1 = 0; index1 < index+1; index1++) {
            sum+=index1;
        }
        
    }return sum;
}

console.log(tetra(2));
console.log(tetra(5));
console.log(tetra(6)); */


/* function compact(arr) {
    let array=[];

    for (let index = 0; index < arr.length; index++) {
        if (arr[index]!=false && arr[index]!=NaN && arr[index]!=0 && arr[index]!=undefined && arr[index]!='') {
            array.push(arr[index]);
        }
        
    }return array;
}

console.log(compact([0, 1, false, 2, "", 3])); */




/* function makePlusFunction(baseNum) {

        function foo(params) {
            return baseNum+params;
        }
        return foo;
}

const plusFive = makePlusFunction(5);
console.log(plusFive(2));
console.log(plusFive(-8));

const plusTen = makePlusFunction(10);

console.log(plusTen(0));
console.log(plusTen(188));
console.log(plusFive(plusTen(0))); */


// Given a number, n, return a function which adds n to the number passed to it.

/* function add(n) {
	function name(params) {
        return n+params;
    }
    return name;
}

console.log(add(10)(20));
console.log(add(0)(20));
console.log(add(-30)(80)); */


// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

/* function toArray(obj) {
    let array=Object.entries(obj);
    return array;
}


console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({})); */


// Create a function that concatenates n input arrays, where n is variable.

/* function concat(...args) {
    let array=[];
    let arr=array.concat(...args)
    return arr;
}

console.log(concat([1, 2, 3], [4, 5], [6, 7]));
console.log(concat([1], [2], [3], [4], [5], [6], [7]));
console.log(concat([1, 2], [3, 4]));
console.log(concat([4, 4, 4, 4, 4])); */


// Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end

/* function add_suffix(suffix) {
	
    return function (params) {
        return params+suffix;
    }
    
}

let add_ly = add_suffix("ly");
console.log(add_ly("hopeless"));

console.log(add_ly("total"));

let add_less = add_suffix("less");
console.log(add_less("fear"));

console.log(add_less("ruth")); */



// Triangular Number Sequence

/* function triangle(n) {
    let t=1;

    for (let index = 2; index < n+1; index++) {
        t+=index;
        
    }return t;
	
}

console.log(triangle(1));
console.log(triangle(6));
console.log(triangle(215)); */


// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

/* function arrayOfMultiples (num, length) {
        let result=[];
        for (let index = 1; index <= length; index++) {
            result.push(index*num);
            
        }return result;
}

console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6)); */


// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, 
// and their corresponding values in the same order.

/* function keysAndValues(obj) {
    let a = Object.keys(obj);
    let b = Object.values(obj);
    let c = [a, b];
    return c;
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined })); */


// Write a function that returns an anonymous function, which adds n to its input

/* function addsNum(n) {

    return function (num) {
        return n+num;
    }
	
}

let adds1 = addsNum(1);
console.log(adds1(3));

console.log(adds1(5.7));

let adds10 = addsNum(10);
console.log(adds10(44));

console.log(adds10(20)); */


// Write a function that converts an object into an array of keys and values

/* function objectToArray(obj) {
	const entries=Object.entries(obj);
    return entries;
}

console.log(objectToArray({
    D: 1,
    B: 2,
    C: 3
  }));

console.log(objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
  })); */


// Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer

/* function intWithinBounds(n, lower, upper) {
    if (!Number.isInteger(n)) {
        return false;
    }
	if (n>=lower && n<upper) {
        return true;
    }return false;
}

console.log(intWithinBounds(3, 1, 9));
console.log(intWithinBounds(6, 1, 6) );
console.log(intWithinBounds(4.5, 3, 8)); */


// Write a class called Rectangle that represents a rectangular two-dimensional region

/* class Rectangle{
    constructor(x,y,width,heigth)
    {
        this.x=x;
        this.y=y;
        this.width=width;
        this.heigth=heigth;
    }
    toString(){
        return `[x=${this.x}, y=${this.y}, width=${this.width}, heigth=${this.heigth}]`;
    }
}

 */


function count(n) {
    if (n<0) {
        n=-n;
    }
    return n.toString().split('').length;

}
console.log(count(318));
console.log(count(-92563));
console.log(count(4666));
