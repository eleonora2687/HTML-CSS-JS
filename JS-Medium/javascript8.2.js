'use strict'

/* let fly={
    canFly:true
}

let ironMan={
    heroName:'Stark'
}

let batman={
    heroName:'Wayne'
}


Object.setPrototypeOf(ironMan,fly);

Object.setPrototypeOf(batman,fly);

fly.canFly=false;

console.log(ironMan,batman);
 */

/* function Superhero(name,strength,stamina) {
    this.name=name;
    this.strength=strength;
    this.stamina=stamina;
}

let ironMan=new Superhero('Iron Man',100,1000);
console.log(ironMan); */

/* function Dog(name,breed,weight=10)
{
    this.name=name;
    this.breed=breed;
    this.weight=weight;
}

let Dog=function(name,breed,weight=10)
{
    this.name=name;
    this.breed=breed;
    this.weight=weight;
}

let piko=new Dog('Piko','Terrier');
let lassie=new Dog('Lassie','Colley',30);

console.log(piko);
console.log(lassie); */

/* function Superhero(name,strength,stamina) {
    this.name=name;
    this.strength=strength;
    this.stamina=stamina;
}

Superhero.prototype.fly=function(){
    return 'i m flying'
}

let ironMan=new Superhero('Iron Man',100,1000);
console.log(ironMan);
console.log(ironMan.fly());

 */

/*function Dog(name,breed,weight=10,mood=5)
{
    this.name=name,
    this.breed=breed,
    this.weight=weight,
    this.mood=mood

    /* this.eat=() => {
        this.mood += 1;
    }
 */ 

/* Dog.prototype.eat=function()
{
        console.log(this.name + ' eating..');
        this.mood+=1;
}
    this.walk=() => {
        console.log(this.name+' walking..');
        this.mood += 1;
    }


    this.bark=()=>{
        if(this.mood>=5)
        {
            console.log('Woof Woof');
        }
        else
            console.log('woof');
    }
}

let piko=new Dog('Piko','terrier',5,3);
piko.bark();
piko.eat();
piko.walk();
piko.bark();
console.log(piko); */

/* let cow={
    name:'molly',
    weight:300,

    toString(){
        return `${this.name} (${this.weight}kgm)`;
    },

    valueOf()
    {
        return this.weight;
    },

    toJSON(){
        return {weight:this.weight};
    }
}

// console.log(cow,`${cow}`);


let cow2={
    name:'helga',
    weight:400,

    valueOf(){
        return this.weight;
    }
}
console.log(cow<cow2);
console.log(JSON.stringify(cow)); */


function randomGrade()
{
    return Math.floor(Math.random() * 11);
}

function randomInt()
{
    return Math.floor(Math.random() * 10);
}

function Student(firstName,lastName,grade)
{
    this.firstName=firstName,
    this.lastName=lastName,
    this.grade=grade,

    toString()
        {
            console.log(`${this.firstName} ${this.lastName} (grade: ${this.grade})`);
        }
    
}


let col=3;

let array=new Array(10);

let names=['Danna','Rachel','Marlie','Vanessa','Jaslyn','Ezekiel','Bianca','Kaelyn','Sophie','Rylee'];
let surnames=['Tanner','Cooke','Murillo','Singh','Stanton','Gutierrez','Oliver','Hopkins','Riley','Garrett'];



for(let i=0;i<array.length;i++)
{
    array[i]=new Array(col);
    let j=0;
    while(j<3)
    {
        
        array[i][j]=names[randomInt()];
        j++;
        array[i][j]=surnames[randomInt()];
        j++;
        array[i][j]=randomGrade();
        j++;
    }
}
console.log(array);

for(let i=0;i<10;i++)
{
    let student=new Student(array[i][0],array[i][1],array[i][2]);
    student.toString();
    
}

