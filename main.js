import { Employee, fullTimeEmployee, partTimeEmployee } from "./employee.js";

let globalObject

function hideForm(){

let selector= document.querySelector("select")
let yearlySalary= document.getElementById("inputYearlySalary")
let vacationDays= document.getElementById("inputVacationDays")
let hourlyWage= document.getElementById("inputHourlyWage")

let labelHourlyWage= document.getElementById("labelHourlyWage")
let labelYearlySalary= document.getElementById("labelYearlySalary")
let labelVacationDays= document.getElementById("labelVacationDays")

if(selector.value === "fullTime" ){
    hourlyWage.style.display = "none";
    labelHourlyWage.style.display = "none";
    yearlySalary.style.display = "block";
    vacationDays.style.display = "block";
    labelYearlySalary.style.display = "block";
    labelVacationDays.style.display = "block";
    titleID.textContent = "Enter Full-Time Employee"
}

if(selector.value === "partTime" ){
    yearlySalary.style.display = "none";
    vacationDays.style.display = "none";
    labelVacationDays.style.display = "none";
    labelYearlySalary.style.display = "none";
    hourlyWage.style.display = "block";
    labelHourlyWage.style.display = "block";
    titleID.textContent = "Enter Part-Time Employee"
}

if(selector.value === ""){
    titleID.textContent = "Enter an Employee"
}

}


function createEmployee(){

    event.preventDefault()

    let name= inputName.value
    let age = parseFloat(age.value)
    let salary= parseFloat(inputSalary.value)
    let type = employeeType.value
    let p = document.querySelector("p")

    if(type === "fullTime"){
        globalObject= new fullTimeEmployee(name,age,salary,yearlySalary)
        p.textContent= globalObject.getDetails()
        fullTimeForm.style.display= 'block'
    }

    if(type === "partTime"){
        globalObject= new partTimeEmployee(name, age, salary, hourlyWage)
        p.textContent= globalObject.getDetails()
        partTimeForm.style.display= 'block'
    }


}

function addFulltimeInfo(){

    event.preventDefault()

    let monthlyPayment= parseFloat(inputYearlySalary.value)
    globalObject.calculateMonthlyPay(monthlyPayment)

    let p= document.querySelector("p")
     



    let vacationDays= parseFloat(inputVacationDays.value)
    globalObject.accumulateVacationDays(vacationDays)

    p.textContent= `Your estimated monthly pay is ${globalObject.calculateMonthlyPay()} and you have ${globalObject.accumulateVacationDays()} vacation days.`

}

function addParttimeInfo(){

    event.preventDefault()

    let hours= parseFloat(inputHourlyWage.value)
    globalObject.workHours(hours)

    let p= document.querySelector("p")
    p.textContent= `Your earned pay is ${globalObject.workHours(hours)}`



}


window.addParttimeInfo= addParttimeInfo

window.createEmployee= createEmployee

window.addFulltimeInfo= addFulltimeInfo

window.hideForm= hideForm