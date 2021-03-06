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
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
let empDailyHrsWageArr = new Array();
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
    empDailyWageMap.set(work_Days, calcDailyWage(empHrs));
    empDailyHrsMap.set(work_Days,empHrs);
    empDailyHrsWageArr.push({
        dayNumb:work_Days,
        dailyHrs:empHrs,
        dailyWage:calcDailyWage(empHrs),
        toString(){
            return '\nDay:'+this.dayNumb+' -> Working hours: '+this.dailyHrs+
            ', Wage Earned: '+this.dailyWage
        },
    });
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

//Computing Total Wage using map
console.log("\nEmp Wage (using Map): "+
Array.from(empDailyWageMap.values()).reduce(totalWages,0));

//Computing using arrow functions
const findTotal = (totalVal,dailyVal) => totalVal+dailyVal;
let totalSalary = empDailyWageArray.filter(dailyWage => dailyWage > 0).reduce(findTotal,0);
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
console.log("\nTotal Emp Wage(using Arrow): "+totalSalary+"\nTotal Hours Worked: "+totalHours);
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach( (value, key, map) => {
    if (value==8) fullWorkingDays.push(key);
    else if (value==4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days: "+fullWorkingDays+
"\nPart Working Days: "+partWorkingDays+
"\nNon Working Days: "+nonWorkingDays);

//Displaying Dilay Hours and Wages using Object
console.log("\nDisplaying Daily Hours and Wage:"+empDailyHrsWageArr);

//Calculating Total Wage and Total Hours Using Object and Arrow
let totalwages = empDailyHrsWageArr.filter(dailyHrsWage => dailyHrsWage.dailyWage > 0)
.reduce((totalwages,dailyHrsWage) => totalwages += dailyHrsWage.dailyWage,0);
let totalHrs = empDailyHrsWageArr.filter(dailyHrsWage => dailyHrsWage.dailyWage > 0)
.reduce((totalHrs,dailyHrsWage) => totalHrs += dailyHrsWage.dailyHrs,0);
console.log("\nTotal Emp Wage(using Object): "+totalwages+"\nTotal Hours Worked: "+totalHours);

//Displaying Full Working Days using forEach
console.log("\nLogging Full Working days:");
empDailyHrsWageArr.filter(dailyHrsWage => dailyHrsWage.dailyHrs == 8)
.forEach(dailyHrsWage => console.log(dailyHrsWage.toString()));

//Displaying Part Working Days using Map and object
let partWorkingDayStrings = empDailyHrsWageArr.filter(dailyHrsWage => dailyHrsWage.dailyHrs == 4)
.map(dailyHrsWage => dailyHrsWage.toString());
console.log("\nPart Working Days: "+partWorkingDayStrings);

//Displaying Non Working Days using Map Function
let nonWorkingDayNums = empDailyHrsWageArr.filter(dailyHrsWage => dailyHrsWage.dailyHrs == 0)
.map(dailyHrsWage => dailyHrsWage.dayNumb);
console.log("\nNon Working Days: "+nonWorkingDayNums);