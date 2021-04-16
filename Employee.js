const wageperhr = 20;
const hrsinday = 8;
var employecheck = Math.floor(Math.random() * 2);
if(employecheck == 1) {
    console.log("Employee is present");
}
else{
console.log("Employee is absent");
}
var dailywage = wageperhr * hrsinday * employecheck;
console.log("Daily Employee wage :", + dailywage);
