'use strict'

/* class SuperHero{
    constructor(name,strength,stamina)
    {
        this.name=name
        this.strength=strength
        this.stamina=stamina
    }
}

let ironMan=new SuperHero('Iron Man',50,100)
let superMan=new SuperHero('Superman',30,500)

console.log(superMan);
console.log(ironMan); */

/* class Superhero{
    
    strength;
    stamina=10;

    constructor(name)
    {
        this.name=name;
        
    }
}

let ironMan=new Superhero('Iron Man');
ironMan.stamina=500;
console.log(ironMan); */

/* class Superhero{
    _stamina;

    get stamina()
    {
        return this._stamina;
    }
    set stamina(stamina)
    {
        this._stamina=stamina;
    }
}

let ironMan=new Superhero;
ironMan.stamina=500;
console.log(ironMan); */

/* class SuperHero{
    #bankAccount=1000;

    constructor(name){
        this.name=name;
    }
    
    print()
    {
        console.log(`Superhero ${this.name} has ${this.#bankAccount} dollars in his bank account`);
    }
}

let ironMan=new SuperHero('Iron Man');
ironMan.print() */


/* class Point{
    _x=0
    _y=0

    get x()
    {
        return this._x
    }

    set x(x)
    {
        this._x=x;
    }

    get y()
    {
        return this._y
    }

    set y(y)
    {
        this._y=y;
    }
}

class Distance{
    constructor(x1,x2,y1,y2)
    {
        this.x1=x1;
        this.x2=x2;
        this.y1=y1;
        this.y2=y2;

    }
    distance()
    {
        return Math.sqrt(Math.pow(this.x1-this.x2,2)+Math.pow(this.y1-this.y2,2))
    }
}
let point1=new Point();
let point2=new Point();

point1.x=1;
point1.y=4;

point2.x=5;
point2.y=6;

let dist=new Distance(point1.x,point2.x,point1.y,point2.y);
console.log(dist.distance()); */

/* class Point{
    #x;
    #y;

    constructor(x,y)
    {
        this.#x=x;
        this.#y=y;

    }

    get x()
    {
        return this.#x;
    }

    set x(value)
    {
        this.#x=value;
    }

    get y()
    {
        return this.#y;
    }

    set y(value)
    {
        this.#y=value;
    }
}

class Line{
    #pointA
    #pointB

    constructor(pointA,pointB)
    {
        this.#pointA=pointA;
        this.#pointB=pointB;
    }

    get pointA()
    {return this.#pointA;}

    set pointA(value)
    {this.#pointA=value;}

    get pointB()
    {return this.#pointB;}

    set pointB(value)
    {this.#pointB=value;}

    get distance(){
        return Math.sqrt((this.#pointA.x-this.#pointB.x)**2+(this.#pointA.y-this.#pointB.y)**2)
    }

}

let line=new Line(new Point(1,1),new Point(4,5));
console.log(line.distance); */

/* class Dog{
    #name;
    #breed;
    #mood;
    #weight
    

    constructor(name,breed,weight=10,mood=5)
    {
        this.#name=name;
        this.#breed=breed;
        this.#weight=weight;
        this.#mood=mood;
    }

    eat()
    {
        //if(this.mood>=5 && this.mood<=10)
            this.#mood+=1;
    }
    bark()
    {
        if (this.#mood>=5 && this.#mood<=10) {
            console.log('woof woof');
        } else {
            console.log('woof');
        }
    }
    walk()
    {
        //if(this.mood>=5 && this.mood<=10)
            this.#mood+=1;
    }
    weight()
    {
        console.log(`${this.#weight}`);
    }
}

let piko=new Dog('Piko','terrier',20,3);
piko.weight();
piko.bark();
piko.eat();
piko.eat();
piko.bark(); */


/* class Circle{

    #c;
    #metric;

    constructor(c,metric)
    {
        this.#c=c;
        this.#metric=metric;
    }

    get c()
    {return this.#c;}
    set c(value)
    {this.#c=value;}

    inToCm(inches)
    {return inches*2.54;}

    cmToIn(cm)
    {return cm/2.54;}
    
    perimeterCm()
    {
        return (this.#metric=='cm'?2*Math.PI*this.inToCm(this.#c):2*Math.PI*this.cmToIn(this.#c))
            
    }

    perimeterIn()
    {
        return (this.#metric=='in'?2*Math.PI*this.cmToIn(this.#c):2*Math.PI*this.inToCm(this.#c))
    }
}

let circle1=new Circle(2,'in');
console.log(circle1.perimeterIn()); */


class Point{
    x;
    y;

    constructor(x,y)
    {
        this.x=x;
        this.y=y;
    }

    get x()
    {return this.x;}
    set x(value)
    {this.x=value;}

    get y()
    {return this.y;}
    set y(value)
    {this.y=value;}


}

class Line{
    #pointA;
    #pointB;

    constructor(pointA,pointB)
    {
        this.#pointA=pointA;
        this.#pointB=pointB;
    }

    get pointA()
    {return this.#pointA;}
    set pointA(value)
    {this.#pointA=value;}
    
    get pointB()
    {return this.#pointB;}
    set pointB(value)
    {this.#pointB=value;}

    length()
    {return Math.sqrt((this.#pointA.x-this.#pointB.x)**2+(this.#pointA.y-this.#pointB.y)**2)}
}

let point1=new Line(new Point(1,2),new Point(2,2));
console.log(point1.length());