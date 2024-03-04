'use strict'

//object Number

/* let x=new Number(10);
console.log(x); */

//boxing

/* let x=10.112;

console.log(x instanceof Number, typeof x);
console.log(x.toPrecision(5));
console.log(x instanceof Number, typeof x);

x=new Number(3.141512);
console.log(x instanceof Number, typeof x);
console.log(x+2);   //unboxing

x=Number(3.141512);
console.log(x instanceof Number, typeof x); */

//methods of Object Number

/* let x=new Number(3.14159265358979);

console.log(x.toExponential(4));

console.log(x.toFixed(4));

console.log(x.toLocaleString("en-US"));

console.log(x.toPrecision(7));

console.log(x.toString(34));

console.log(x.valueOf());

console.log(x.Number); */

/* let x=BigInt(15);
console.log(x,typeof x);

console.log(Object(10n));

console.log(BigInt.asIntN(4,8n));

console.log(BigInt.asUintN(5,50n));

console.log(x,x.toString());
console.log(x.toString(8));
console.log(x.toString(2));

x=3.14159265358979

console.log(x.toLocaleString('el-GR'));
console.log(x.toLocaleString('en-EN'));
console.log(x.toLocaleString('de-DE')); */

/* let x=new Boolean(50);
console.log(x,typeof x);

console.log(x.valueOf());

let y=false;
console.log(y.toString());

console.log(Boolean(Number(0)).toString().valueOf()); */

// Symbols

/* let s=Symbol();
console.log(s,Object(s));

let x=Symbol();
let y=Symbol();

console.log(x==y,Symbol()==Symbol());

let s1=Symbol.for('common');
let s2=Symbol.for('common');

console.log(s1==s2);

let object1={
    [Symbol.for('common')]: 1
}

let object2={
    [Symbol.for('common')]: 1
}

console.log(object1.s==object2.s);

console.log(object1); */


class Point{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
    };

    *[Symbol.iterator](){
        yield this.x;
        yield this.y;
    };
    
 
}

class Line{
    constructor(point1,point2)
    {
        this.point1=point1;
        this.point2=point2;
    }

    length()
    {
        return Math.sqrt((this.point1.x-this.point2.x)**2+(this.point1.y-this.point2.y)**2)
    }
}

let line=new Line(new Point(1,1),new Point(2,3));

let point1=new Point(5,6);
let point2=new Point(7,8);

for (let value of point2)
        console.log(value);

console.log(line.length());