'use strict'

/* class Base{
    constructor(baseProperty=10)
    {this.baseProperty=baseProperty;}
}

class Derived extends Base{
    constructor(baseProperty,derivedProperty)
    {
        super(baseProperty);
        this.derivedProperty=derivedProperty;
    }
}

let base=new Base(0);
let derived=new Derived(base.baseProperty,2);

console.log(derived); */


/* class Cow{
    constructor(weight,hunger){
        this.weight=weight;
        this.hunger=hunger;
    }

    express()
    {
        if (this.hunger>5) {
            console.log('Mooooow');
        } else {
            console.log('Mow');
        }
    }
}


class LongHornCow extends Cow{
    constructor(weight,hunger,hornLength)
    {
        super(weight,hunger);
        this.hornLength=hornLength;
    }
}

let molly=new Cow(100,6);
molly.express();

let bob=new LongHornCow(200,3,0.5);
bob.express();

let dylan=new LongHornCow(300,8,0.3);


console.log(`Bob' s horns are ${bob.hornLength}m long`);
console.log(`Bob' s weight is ${bob.weight} and Bob' s hunger is ${bob.hunger}`);

console.log(bob,dylan);

Object.getPrototypeOf(bob).bobAttr=2;
Object.getPrototypeOf(dylan).dylanAttr=3;

console.log(bob.bobAttr,dylan); */


/* class Cow{
    constructor(weight,hunger)
    {
        this.weight=weight;
        this.hunger=hunger;
    }

    express()
    {
        if (this.hunger>=5) {
            console.log('Moooow');
        } else {
            console.log('Moow');
        }
    }
}

class TexasLongHorn extends Cow{
    constructor(weight,hunger,hornLength)
    {
        super(weight,hunger);
        this.hornLength=hornLength;
    }

    express(){
        super.express();
    }
}

let molly=new Cow(100,5);
molly.express();

let bob =new TexasLongHorn(200,4,0.4);
bob.express(); */


/* class Superhero{
    constructor(name,strength,stamina)
    {
        this.name=name;
        this.strength=strength;
        this.stamina=stamina;
    }
}

function foo(superhero){
        Object.assign(superhero,{
            fly(){console.log('I m flying...');},
            attack(){console.log("i'm attacking");}
        })
}

let ironMan=new Superhero('Iron Man',50,100);
foo(ironMan);
console.log(ironMan); */
 


class Customer{
    constructor(name,address,orders)
    {
        this.name=name;
        this.address=address;

        if (this.orders === undefined) {
            this.orders=[];
        } else {
            this.orders=orders;    
        }
        
    }

    placeOrder(order){
        this.orders.push(order);
    }

    toString()
    {
        let data=`${this.name}, ${this.address}\n`;
        let sum=0;

        for (let order of this.orders) {
            sum+=order.payment.amount;    
        }
        return data+`sum=${sum}`;
    }
}

class Order{
    constructor(date,payment)
    {
        this.date=date;
        this.payment=payment;
    }
}

class Payment{
    constructor(amount)
    {
        this.amount=amount;
    }
    
}

let customer=new Customer('Trikidou Eleonora','Xrusostomou Smurnhs 58');

customer.placeOrder(new Order('2024/03/03',new Payment(100)));
customer.placeOrder(new Order('2024/02/01',new Payment(200)));
customer.placeOrder(new Order('2024/01/01',new Payment(300)));

console.log(customer.toString());