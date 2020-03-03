// Javascript variables exercise

//Exercise 1: The Fortune Teller
let jobTitle;
jobTitle= 'Data Scientist';

let geographicLocation;
geographicLocation= 'Toronto';

let annualSalary;
annualSalary= 65000;

let companyName;
companyName= 'IBM';

console.log(` You will be a ${jobTitle} in ${geographicLocation}, making $${annualSalary} for ${companyName}.`)



let exOne = document.querySelector(`.ex1`);
exOne.textContent = ` You will be a ${jobTitle} in ${geographicLocation}, making $${annualSalary} for ${companyName}.`;


//Exericse 2: The age Calculator
let birthYear= 1994;
let urAge = 2020 - birthYear;

console.log(` They are ${urAge} years old.`)


let exTwo = document.querySelector(`.ex2`);
exTwo.textContent = `They are ${urAge} years old.`;

//Exercise 3:
let currentAge = 25;
let maxAge = 100;
let restMyyrs;
let amountSnack;

restMyyrs= maxAge - currentAge;
amountSnack = restMyyrs * 365 * 1;

console.log(`You will need ${amountSnack}bags of chips to last you untill the ripe old age of ${maxAge}.`)


let exThr = document.querySelector(`.ex3`);
exThr.textContent = `You will need ${amountSnack} bags of chips to last you untill the ripe old age of ${maxAge}.`;



//Exercise 4
let raDius;
let circumFerence;
let pie;
let arEa;

raDius = 3
pie = Math.PI ;
circumFerence = 2 * pie * raDius;
arEa = pie * raDius**2 ;

console.log(`The circumference is ${circumFerence}. The area is ${arEa}.` )

let exFou = document.querySelector(`.ex4`);
exFou.textContent = `The circumference is ${circumFerence}. The area is ${arEa}.`;


//Exercise 5
let c1;
let fahrenheitTemp;


c1 = 26
fahrenheitTemp = (c1 * (9/5)) + 32

console.log(`${c1}\xB0C is ${fahrenheitTemp}\xB0F.  `)

let f1;
let celsiusTemp;

f1 = 350;
celsiusTemp = (f1 - 32)* (5/9);

console.log(`${f1}\xB0F is ${celsiusTemp}\xB0C.`)


let exFiv = document.querySelector(`.ex5`);
exFiv.textContent = `${c1}\xB0C is ${fahrenheitTemp}\xB0F.   ${f1}\xB0F is ${celsiusTemp}\xB0C.`;















