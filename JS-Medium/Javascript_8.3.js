'use strict'

/* let object={
    x:1
}

Object.defineProperty(object,'y',{
    value:2,
    enumerable:false
})

for(let property in object)
{
    console.log(property, object[property]);
}

Object.defineProperty(object,'y',{
    value:3,
    writable:false,
    configurable:false
})


delete object.y//error */

/* function Superhero(name,strength,stamina)
{
    this.name=name;
    this.strength=strength;
    this.stamina=stamina;

}

Object.prototype.isVillain=true;

let ironMan=new Superhero('Iron Man',50,100)

console.log(Object.getOwnPropertyNames(ironMan));

console.log(Object.getOwnPropertyDescriptor(ironMan,'isVillain'));

console.log(Object.getOwnPropertyDescriptors(ironMan));

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(ironMan)));

console.log(ironMan.hasOwnProperty('isVillain'));

console.log(ironMan.hasOwnProperty('name'));

console.log(ironMan.propertyIsEnumerable('name'));

console.log(ironMan instanceof Superhero);

console.log(ironMan.isVillain); */

/* function Superhero(name,strength,stamina)
{
    this.name=name;
    this.strength=strength;
    this.stamina=stamina;

}

Superhero.prototype.isVillain=false;

let ironMan=new Superhero('Iron Man',36,1000);

let voidMan={}

console.log(voidMan);

console.log(ironMan instanceof Superhero, ironMan instanceof Object);

console.log(ironMan.constructor.name=='Superhero',ironMan.constructor.name=='Object'); */

/* function Superhero(name,strength,stamina){
    this.name=name;
    this.strength=strength;
    this.stamina=stamina;

}
Superhero.prototype={
    constructor:Superhero,
    isVillain:false,
    hasAshield:true

}

let ironMan=new Superhero('Iron Man',36,41)
console.log(ironMan.hasAshield);
 */

/* let object={
    _x:0,

    get x()
    {
        return this._x=x
    },

    set (x)
    {
        this._x=x
    }
}

console.log(object._x);
object._x=1;
console.log(object._x); */

/* let object={}

Object.defineProperty(object,'x',{

    
    get foo()
    {
        return this._x;
    },

    
    set foo(value)
    {
        this._x=value;
    },
    enumerable:false

})

console.log(object.foo);
object.foo=1;
console.log(object.foo);

 */

/* function Base(baseProperty){
    this.baseProperty=baseProperty
}

function Derived(derivedProperty){
    this.derivedProperty=derivedProperty
}

Derived.prototype=new Base(1);

Derived.prototype.constructor=Derived;

let d=new Derived(2);
console.log(d);

 */


/* function Animal(name,weight,height)
{
    this.name=name;
    this.weight=weight;
    this.height=height;

    this.w=function (){
        console.log(`The weight of the animal with the name ${this.name} is: ${this.weight}kgs`);

    }

    this.h=function (){
        console.log(`The height of the animal with the name ${this.name} is: ${this.height}metres`);

    }
}

function Horse(name,weight,height,colour,tail)
{
    Animal.call(this,name,weight,height);
    this.colour=colour;
    this.height=height;
    this.tail=tail;

    this.c=function(){

     console.log('The colour of the animal with the name '+this.name+' is'+` ${this.colour}`)}

    this.t=function(){
        return `The tail is ${this.tail} long`

    }
}

Horse.prototype=new Animal();
Horse.prototype.constructor=Horse;

let blackBeauty=new Horse('beauty',120,1.5,'black',1.2);

blackBeauty.w();
blackBeauty.h();
blackBeauty.c();


function Dog(weight,height)
{
    
    Animal.call(this,weight,height);
    
    this.bark=function()
    {
        console.log('woof woof');
    }
}
Dog.prototype=new Animal();
Dog.prototype.constructor=Dog;

function Doberman(weight,height,intensity)
{
    this.intensity=intensity;
    Dog.call(this,weight,height);
    this.run=function()
    {
        console.log('The dog runs');
    }
}

Doberman.prototype=new Dog();
Doberman.prototype.constructor=Doberman;

function Bulldog(weight,height,size)
{
    this.size=size;
    Dog.call(this,weight,height);
    this.sleep=function()
    {
        console.log('The dog is sleeping');
    }
}

Bulldog.prototype=new Dog();
Bulldog.prototype.constructor=Bulldog;

let doberman=new Doberman(8,0.4,1.2);
doberman.bark();
doberman.run();
doberman.bark();

let bulldog=new Bulldog(5,0.6,2);
bulldog.bark();
bulldog.sleep();
bulldog.sleep();
 */

