'use strict'

class Customer{
    constructor(name,address,orders)
    {
        this.name=name;
        this.address=address;
        if (this.orders===undefined) {
            this.orders=[];
        } else {
            this.orders=orders;
        }

    }

    placeOrder(order)
    {
        this.orders.push(order);
    }

    toString()
    {
        let data=`${this.name}, ${this.address}\n`;
        let order_data='';
        let sum=0;

        for (let order of this.orders) {
            order_data+=order.date+' '+order.payment.amount+' '+'\n';
            sum+=order.payment.amount;
        }
        return data+order_data+`Sum=${sum}`;
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

class Credit extends Payment{
    constructor(amount,number,expDate){
        super(amount);
        this.number=number;
        this.expDate=expDate;
    }
}

class Check extends Payment{
    constructor(amount,number,bankCode){
        super(amount);
        this.number=number;
        this.bankCode=bankCode;
    }
}
let customer=new Customer('Trikidou Eleonora','Zichnis 7');
customer.placeOrder(new Order('03-03-2024',new Payment(100)));
customer.placeOrder(new Order('01-02-2024',new Payment(200)));

console.log(customer.toString());

let customer1=new Customer('Trikidis Zaal','Androutsou 56');
customer1.placeOrder(new Order('31/07/2021',new Credit(500,'1234-5678','01/06/2038')));
customer1.placeOrder(new Order('24/07/2020',new Credit(600,'1234-5678','01/06/2038')));

console.log(customer1.toString());

let customer2=new Customer('Trikidou Elina','Neas Zichnis 33');
customer2.placeOrder(new Order('11/07/2021',new Check(500,'65432456','2536756432134567')));

console.log(customer2.toString());

let customer3=new Customer('Trikidou Marianna','Neas Zichnis 43');
customer3.placeOrder(new Order('03/06/2020',new Check(1200,'6543245','32453678654324657')));

console.log(customer3.toString());