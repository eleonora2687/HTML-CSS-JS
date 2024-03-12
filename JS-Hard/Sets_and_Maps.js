'use strict'

// variations of map and filter

// map_alternatives

/* let result=([1,2,3,4,5]).map((element,index,array)=>
({
    prev:array[index-1],
    index:element,
    next:array[index],

}))

console.log(result);

let array=[1,2,3,4,5]

let sum=array.reduce((accumulator,element,index,array)=>

    {
        console.log(array,index,element,accumulator);
        return accumulator+element;
    }
,10);

console.log(sum); */

/* const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2ead9c0a4emshb1d640a3cf62896p161377jsn8453f0f0bf16',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

let query = "Matrix";
  fetch('https://imdb8.p.rapidapi.com/auto-complete?q=' + query, options)
      .then(response => response.json())
      .then(response => {

        console.log(
            response.d.reduce((max, item)=>{
                if (max.rank > item.rank)
                    max = item
                return max;
            }))
      })
      .catch(err => console.error(err));
 */

// some and every

/* let array=[1,2,3,4,5];

console.log(array.every(x=>x%2==0));
console.log(!array.every(x=>x%2==0));
console.log(array.some(x=>x%2==0));
console.log(!array.some(x=>x%2==0)); */


/* let array=[1,2,3,4,5];

array.forEach(x=>console.log(x));

let copy=[];

array.forEach(x=>copy.push(x));
console.log(copy);

array=[2,3,5];
console.log(array,copy); */

// flat andflat_map

/* console.log([1,[1,2]].flat());
console.log([1,[1,2]].flatMap(x=>x)); */

// Sets

/* let set=new Set([1,2,3,4,5,1,3,4,5]);
console.log(set);

let set1=new Set([NaN,1,new Number(1),NaN,1,new Number(1)]);
console.log(set1);

let o1={a:1};
let o2={a:2};
let o3={a:3, valueOf(){return this.a}};
let o4={a:3, valueOf(){return this.a}};

let set2=new Set([o1,o2,o3,o4]);
console.log(set2);

let set3=new Set();
console.log(set3); */

/* let set=new Set([1,2,3,4,5]);
console.log(set.has(3));

set.add('a');
console.log(set);

set.delete(1);
console.log(set);

set.clear();
console.log(set);

set=new Set([3,4,'c','3245',[2,3]]);
console.log(set.keys());

console.log(set.values());

console.log(set.entries());

set.forEach((foo1,foo2,foo3)=>
{
    console.log((foo1,foo2,foo3));
    
}) */

// Maps

/* let map=new Map();
map.set('1','a');
map.set('1','b');
map.set(2,'a');
console.log(map);

console.log(map.get(1)); */

/* let map=new Map();

map.set('1','value1');
map.set(1,'value2');
map.set(null,'value3');
map.set(undefined,'value4');

console.log(map.get('1'));
console.log(map.get(1));
console.log(map.get(null));
console.log(map.get(undefined));

console.log(map);

let map2=new Map(map);
console.log(map2);

let map3=new Map([['',3],[null,1],[undefined,5]]);
console.log(map3);

let map4=new Map(new Set([[1,'123'],['2','asdfghj']]));
console.log(map4); */

/* let myMap=new Map(new Set([['1',1],[1,2],[null,5],[undefined,'abc'],['a',null]]));
console.log([[...myMap.keys()],[...myMap.values()],[...myMap.entries()]]);

myMap.delete(null);
console.log(myMap);

let myMap2=new Map(myMap);
myMap.delete(undefined);
console.log(myMap,myMap2);

console.log(new Map(myMap));
myMap.clear();
console.log(new Map(myMap));

let map=new Map(new Set([['1',0],[1,'1'],[null,undefined],[undefined,null],['','Eleonora']]));

map.forEach((value,key,thisMap)=>
{
    console.log(value,key,thisMap);
}) */

// WeakSets

/* let array=[
    {'key1':'value1'},
    {'key2':'value2'}
]

let weakSet=new WeakSet(array);
array.shift();
console.log(array,weakSet); */

let array=[
    {'key1':'value1'},
    {'key2':'value2'}
]

let weakMap=new WeakMap([[array[0],0],[array[1],1]]);
array.shift();

console.log(array,weakMap);