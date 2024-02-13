"use strict";
//array of objects
const classMambers = [
	{ name: "Tim", age:22},
	{ name: "alex",age:17},
	{ name: "collins",age:15},
	{ name: "Ian", age:23},
];
let names = classMambers.map((x)=>x.name);
console.log(names);

let youngMambers = classMambers.filter((Y)=>Y.age<20);
console.log(youngMambers);//collins and alex


let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let x = document.querySelector("h1");
document.querySelector("button").addEventListener("click",()=>{
 x.innerHTML = numbers.filter((e)=>e%2!=0);
});



