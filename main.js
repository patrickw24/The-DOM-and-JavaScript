import { Employee, fullTimeEmployee, partTimeEmployee } from "./employee.js";

let globalObject

function hideForm(){

let selector= document.querySelector("select")
let salary= document.getElementById("inputSalary")
let yearlySalary= document.getElementById("inputYearlySalary")
let vacationDays= document.getElementById("inputVacationDays")
let hourlyWage= document.getElementById("inputHourlyWage")

let labelHourlyWage= document.getElementById("labelHourlyWage")
let labelYearlySalary= document.getElementById("labelYearlySalary")
let labelVacationDays= document.getElementById("labelVacationDays")

if(selector.value === "fullTime" ){
    hourlyWage.style.display= "none"
    labelHourlyWage.style.display= "none"
    globalObject= new fullTimeEmployee(name,age,salary,yearlySalary)


}

if(selector.value === "partTime" ){
    yearlySalary.style.display= "none"
    vacationDays.style.display= "none"
    labelVacationDays.style.display="none"
    labelYearlySalary.style.display="none"



}


}


window.hideForm= hideForm