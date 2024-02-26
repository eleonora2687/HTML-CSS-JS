'use strict'

/* let object={
    x:1,
    'a property':2
}

console.log(object.x);
console.log(object["a property"]);
console.log(object['x']);
 */

/* let object={
    x:1,
    y:2,
    z:5
}

object.w=3;
console.log(object);

 */

/* let foo={
    x:1,
    y:2
}

foo.y=3;
console.log(foo); */

/* let object={
    x:0,
    y:1
}

delete object.x;
console.log(object); */

/* let noraki={
    firstName: 'eleonora',
    lastName: 'trikidou',

    fullname: function(){
        return `${this.firstName} ${this.lastName}` 
    }
}

let marianna={
    firstName: 'beth',
    lastName: 'dutton',

    sister: function()
    {return `${noraki.firstName} ${noraki.lastName}`},

    fullInfo: function(){
        return `[Sister' s name: ${noraki.fullname()}]`
    }
}

console.log(noraki.fullname());
console.log(marianna.sister());
console.log(marianna.fullInfo()); */

/* let noraki={
    firstName: 'eleonora',
    lastName: 'trikidou',

    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}

console.log('firstName' in noraki);
console.log("lastName" in noraki);
console.log('fullName' in noraki); */
/* 
let object={
    x:1,
    y:2
}

let {x:a,y:b}=object;
console.log(a,b);
 */
 

/* let object={
    first:{
        a:1,
        b:2
    },
    second:{
        c:3
    }
}

let {first:{a:x,b:y}}=object;
console.log(x,y);
 */

/* let object={
    x:1,
    y:2,

    foo:function(){
        return x+y;
    }
}

for(let propertyName in object)
    console.log(propertyName,object[propertyName]);
 */

/* let object={
    x:1,
    y:2,
    z:3,

    function(){
        return x+y+z;
    }
}

console.log(Object.keys(object));
console.log(Object.values(object));
console.log(Object.entries(object)); */

/* let object={
    x:0,
    y:1,
    z:5,

    foo:function()
    {
        return x+y+this.z;
    }
}

for(let [key,value] of Object.entries(object))
    console.log(key,value); */


/* let object={
    x:0,
    y:1
}

let object1={...object};
console.log(object1);
 */
/* let object1={
    x:1,
    y:2
}

let object2={
    z:3,
    w:4
}

let object3={...object1,...object2};
console.log(object3); */

/* let object1={
    x:1,
    y:2
}

let object2={
    z:3,
    w:4
}

Object.assign(object2,object1);
console.log(object2);
 */

/* let noraki={
    firstName:'eleonora',
    lastName:'trikidou',

    fullName:function(){
        return `My name is: ${this.firstName} ${this.lastName}`
    }
}

let elina={...noraki};

elina.lastName='tziridou';

console.log(noraki);
console.log(elina); */

/* let zaal={
    firstName:'zaal',
    lastName:'trikidis',
    age:85,

    foo: function(){
        return `${this.firstName} ${this.lastName}`
    }

}

let noraki={
    firstName:'eleonora',
    age:25,

    foo: function(){
        return `${this.firstName} ${zaal.lastName} `
    },
    father:zaal
}

let json=JSON.stringify(noraki);
console.log(noraki);

let object=JSON.parse(json);
console.log(object); */

/* let mother={
    firstName:'nina',
    lastName:'trikidou',
    age:55,

    foo:function(){
        return `${this.firstName} ${this.lastName} ${this.age}`
    }

}

let daughter1={
    firstName:'eleonora',
    lastName:mother.lastName,
    age:35,

    foo:function(){
        return `${this.firstName} ${this.lastName} ${this.age}`
    }
}

let json=JSON.stringify(mother)
let obj=JSON.parse(json)
console.log(obj); */

/* let billingDetails={
    fullName:'trikidou eleonora',
    addressLine1:'Line 1',
    addressLine2:'Line 2',
    addressLine3:'Line 3',

    print:function(){
        let s='';
        s+=this.fullName;
        console.log(s);
        s='';
        s+=this.addressLine1;
        console.log(s);

        s='';
        s+=this.addressLine2;
        console.log(s);
        s='';
        s+=this.addressLine3;
        console.log(s);

    }
}

billingDetails.print(); */

/* let billingDetails={
    fullName:'trikidou eleonora',
    addressLine1:'Line 1',
    addressLine2:'Line 2',
    addressLine3:'Line 3',

    print:function(){
        console.log(this.fullName + '\n');

        for (let index = 0; index < 3; index++) {
            console.log(this['addressLine'+(index+1)]+'\n');
            
        }

    }
}

billingDetails.print(); */

let array={};

array[1]=11;
array[2]=12;
array.length=3;

for (let value of Object.values(array)) {
    console.log(value);
    
}
array["1"]=4;
console.log(array);