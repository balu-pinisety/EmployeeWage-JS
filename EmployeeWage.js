console.log("Program For Employee Wage Problem");
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORK_DAYS = 20;
const MAX_HRS_IN_MONTH =100;
let totalEmpHrs = 0;
let work_Days = 0;
let empDailyWageArray = new Array();
function getWorkingHours(empCheck){
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}
while (totalEmpHrs <= MAX_HRS_IN_MONTH && work_Days<NUM_OF_WORK_DAYS){
    work_Days++;
    let empCheck = Math.floor(Math.random() *10) %3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calcDailyWage(empHrs));
}
let empWage = calcDailyWage(totalEmpHrs);
console.log("Total Days: "+work_Days+"\nTotal Hours: "+totalEmpHrs+
"\nEmployee Wage: "+empWage);

//Calculating Total Wage Using Array for Each
let totalEmpWage = 0;
function sum(dailyWage) {
    totalEmpWage +=dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("\nEmp Wage (using Array for Each): "+totalEmpWage);
//Calculating Total Wage Using Array reduce method
function totalWages(totalWage, dailywage) {
    return totalWage + dailywage;
}
let totwage = 0;
console.log("Emp Wage (using Array Reduce): "+empDailyWageArray.reduce(totalWages,0));

//Displaying dailyWage with day using Array map helper fuction
let dayCount = 0;
function wageWithDay(dailyWage){
    dayCount++;
    return " Day"+dayCount+"="+dailyWage; 
}
let wageWithDayArray = empDailyWageArray.map(wageWithDay);
console.log("\nDaily Wage Map:\n"+wageWithDayArray);

//displays days when full wage '160' earned
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullWageArray = wageWithDayArray.filter(fulltimeWage);
console.log("\nDays when full wage '160' earned:\n"+fullWageArray);

// finds first occurance of full wage '160'
console.log("\nFirst occurance of full wage '160': "+fullWageArray.find(fulltimeWage));

// Checks if every element of full wage is true
console.log("\nCheck All Element have '160': "+fullWageArray.every(fulltimeWage));

//Checks if ther is any Part time wage
function parttimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("\nCheck if there's a part time wage '80': "+wageWithDayArray.some(parttimeWage));

//Finds the no.of days employee worked
function totalDaysWorked(numOfdays, dailyWage) {
    if (dailyWage > 0) return numOfdays+1;
    return numOfdays;
}
console.log("\nNo.of Days Emp Worked: "+empDailyWageArray.reduce(totalDaysWorked,0));