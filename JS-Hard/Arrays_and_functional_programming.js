'use strict'
/* 
function foo(array, value) {
    let newArray=[...array];
    for (let index = 0; index < array.length; index++) {
        newArray[index] += value;
        
    }
    return newArray;
}

let array=[1,2,3,4,5];
console.log(foo(array,1)); */


/* function foo(prefix,name) {
    return prefix+name;
}

const prefix='Sir';
console.log(foo(prefix,' Ευθύμιε'));

 */

/* function f(params) {
    return params**2;
}

function g(func,array) {
    
    let newArray=[...array];

    for (let index = 0; index < array.length; index++) {
        newArray[index] = f(array[index]);
        
    }
    return newArray;
}

let a=[1,2,3,4,5];
console.log(g(f,a)); */

// map

/* function square(x) {
    return x**2;
}

let array=[1,2,3,4,5];
let squares=array.map(square);

console.log(squares);

console.log(([6,7,8]).map(a=>a**2)); */


/* let persons = [
    {name: "John Snow", occupation: "King in the North", house: "Stark"},
    {name: "Daenerys Targaryen", occupation: "Queen of the Seven Kingdoms", house: "Targaryen"},
    {name: "Brandon Stark", occupation: "Three-eyed Raven", house: "Stark"}
]


let names=persons.map(fullName=>fullName.name);
console.log(names);

let name_house=persons.map(({ name, house }) => ({ name, house }));
console.log(name_house);

let namesHouse=persons.map(person=>({
    'name':person.name,'house':person.house
}))

console.log(namesHouse);
 */


// REST API data

/* const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2ead9c0a4emshb1d640a3cf62896p161377jsn8453f0f0bf16',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
 */
/* let query = "Matrix";
  fetch('https://imdb8.p.rapidapi.com/auto-complete?q=' + query, options)
      .then(response => response.json())
      .then(response => {
          console.log(response.d.map(ob=>ob.l));
      })
      .catch(err => console.error(err));

 */
/* 
      let query = "Matrix";
  fetch('https://imdb8.p.rapidapi.com/auto-complete?q=' + query, options)
      .then(response => response.json())
      .then(response => {
          console.log(response.d.map(smh=>({
            'title':smh.l,
            'actors':smh.s
          })));
      })
      .catch(err => console.error(err));
 */

// filter() method

/* console.log(([1,2,3,4,5].map(x=>x**2).filter(x=>!(x%2))));

const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
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
        console.log(response.d.map(ob=>({
            "title": ob.l,
            "year": ob.y,
            "actors": ob.s
        })).filter(ob=>ob.actors.indexOf("Keanu Reeves")>=0))
      })
      .catch(err => console.error(err)); */

      /* let persons = [
        {name: "John Snow", occupation: "King in the North", house: "Stark"},
        {name: "Daenerys Targaryen", occupation: "Queen of the Seven Kingdoms", house: "Targaryen"},
        {name: "Brandon Stark", occupation: "Three-eyed Raven", house: "Stark"}
    ]

    let array=persons.map((name,occupation,house)=>(name,occupation,house));
    console.log(array);

    console.log(persons); */
    

/* let array=[1,2,3,4,5];

let mult=array.reduce((x,y)=>x*y);
let sum=array.reduce((x,y)=>x+y,10);
console.log(mult,sum);

 */
/* let noDuplicates=[1,2,1,3,2,4,7,5].reduce((acc,elem)=>
{
    if(!(elem in acc))
      acc.push(elem);
    return acc;
},[])
console.log(noDuplicates); */

let grades = [
    {name: "tom", grade: 5},
    {name: "bob", grade: 6},
    {name: "pam", grade: 6},
    {name: "jim", grade: 5},
]
let groupsByGrade = grades.reduce((groups, person)=>{
    if (person.grade in groups)
        groups[person.grade].push(person.name);
    else groups[person.grade] = [person.name]
    return groups;
}, []);

console.log(groupsByGrade);