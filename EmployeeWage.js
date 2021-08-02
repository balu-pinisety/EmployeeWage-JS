console.log("Program For Employee Wage Problem");
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORK_DAYS = 20;
const MAX_HRS_IN_MONTH =100;
let empHrs = 0;
let work_Days = 0;
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
while (empHrs <= MAX_HRS_IN_MONTH && work_Days<NUM_OF_WORK_DAYS){
    work_Days++;
    let empCheck = Math.floor(Math.random() *10) %3;
    empHrs += getWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hours: "+empHrs+"\nEmployee Wage: "+empWage);