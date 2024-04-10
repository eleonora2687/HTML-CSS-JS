'use strict'

// Positive Dominant

// An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.

/* function isPositiveDominant(a) {
	let posNum = [];
    let negNum=[];

    let posNumLength=0;
    let negNumLength=0;
    let isPrevious;

    for (let index = 0; index < a.length; index++) {
        isPrevious=false;
            for (let index1= 0; index1 < posNumLength; index1++) {
                if (a[index]==posNum[index1]) {
                    isPrevious=true;
                    break;
                }
                
            }    
        if (isPrevious==false && a[index]>0) {
            posNum.push(a[index]);
            posNumLength+=1;
        }
    }

    for (let index = 0; index < a.length; index++) {
        isPrevious=false;
            for (let index1= 0; index1 < negNumLength; index1++) {
                if (a[index]==negNum[index1]) {
                    isPrevious=true;
                    break;
                }
                
            }    
        if (isPrevious==false && a[index]<0) {
            negNum.push(a[index]);
            negNumLength+=1;
        }
    }

    if (posNumLength>negNumLength) {
        return true;
    } else {
        return false;
    }
    

}

console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]));
console.log(isPositiveDominant([5, 99, 832, -3, -4]));
console.log(isPositiveDominant([5, 0]));
console.log(isPositiveDominant([0, -4, -1])); */


/* function getTotalPrice(groceries) {
    let sum=0;

    groceries.forEach(function (element) {
        sum+=element.quantity*element.price;
      });
      let result = Number(sum).toFixed(1);
      
     return  parseFloat(result);
}

console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 }
  ]));


console.log(getTotalPrice([
    { product: "Milk", quantity: 3, price: 1.50 }
  ]));

console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
  ]));

console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
  ]));

console.log(getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.10 },
    { product: "Lollipop", quantity: 1, price: 0.20 }
  ])); */



/* function doesBrickFit(a,b,c, w,h) {
    let condition1,condition2;
    let i,j,k,l;
    let array=[];
    
    array.push(a);
    array.push(b);
    array.push(c);
    array.push(w);
    array.push(h);
    
	for (let index = 0; index < 3; index++) {
        for (let index1= 3; index1 < 5; index1++) {
            if (array[index]==array[index1]) {
                i=index;
                j=index1;
                break;
            }

        }
        if (i==index) {
            condition1=true;
            break;
        }
        
    }

    for (let index2 = 0; index2< 3; index2++) {
        for (let index3= 3; index3 < 5; index3++) {
            if (array[index2]==array[index3] && index2!=i && index3!=j) {
                k=index2;
                l=index3;
                break;
            }
            
        }
        if (k==index2) {
            condition2=true;
            break;
        }
        
    }
    if (condition1==true  && condition2==true) {
        return true;
    }return false;
  }


console.log(doesBrickFit(1, 1, 1, 1, 1) );
console.log(doesBrickFit(1, 2, 1, 1, 1) );
console.log(doesBrickFit(1, 2, 2, 1, 1) ); */


/* function countLayers(rug) {
    let count=0;
    let same;
    
        for (let index = 0; index <= (rug.length-1)/2; index++) {
            same=false;
            for (let index1 = 0; index1 < index; index1++) {
                if (rug[index]===rug[index1]) {
                    same=true;
                    break;
                }
                
            }if(same==false){
            if (rug[index]===rug[rug.length-1-index]) {
                if (isPalindrome(rug[index])) {
                    count+=1;
                }
            }
        }
            
        }return count;
}

function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

console.log(countLayers([
    "AAAA",
    "ABBA",
    "AAAA"
  ]));

console.log(countLayers([
    "AAAAAAAAA",
    "ABBBBBBBA",
    "ABBAAABBA",
    "ABBBBBBBA",
    "AAAAAAAAA"
  ]));


console.log(countLayers([
    "AAAAAAAAAAA",
    "AABBBBBBBAA",
    "AABCCCCCBAA",
    "AABCAAACBAA",
    "AABCADACBAA",
    "AABCAAACBAA",
    "AABCCCCCBAA",
    "AABBBBBBBAA",
    "AAAAAAAAAAA"
  ]) );

console.log(countLayers([
    "AAAA", 
    "AAAA", 
    "AAAA"])); */
    
    
    
