const wageperhr = 20;
const IS_FUll_TIME =1;
const IS_PART_TIME =2;
const MAX_MONTHLY_HRS = 100;
const TOTAL_MONTH_DAYS =20;
var hrsinday;
var monthlywage =0;
var totalhrs = 0;
var day = 0;
for(var day = 0; day < TOTAL_MONTH_DAYS; day++){
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
if(totalhrs <= 100){
var dailywage = wageperhr * hrsinday;
monthlywage = monthlywage + dailywage;
totalhrs = totalhrs + hrsinday;
}
}
console.log("Monthly Employee wage :", + monthlywage);
