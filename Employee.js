const wageperhr = 20;
const IS_FUll_TIME =1;
const IS_PART_TIME =2;
var hrsinday 
var employecheck = Math.floor(Math.random() * 3);
switch(employecheck) {
   case IS_FUll_TIME:
       hrsinday = 8;
       break;
   case IS_PART_TIME:
       hrsinday = 4;
       break;
   default:
       hrsinday = 0;
       break;
}
var dailywage = wageperhr * hrsinday * employecheck;
console.log("Daily Employee wage :", + dailywage);
