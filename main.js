import { Employee, fullTimeEmployee, partTimeEmployee } from "./employee.js";

let globalObject

function hideForm() {

    
    let selector = document.querySelector("select")
    let p = document.querySelector("p")

    console.log(selector.value)
    if (selector.value === "fullTime") {
        yearlySalaryDiv.style.display = "block"
        hourlyWageDiv.style.display = "none"
        console.log("Show Year Salary")
        partTimeForm.style.display = "none"
        p.textContent = ""
        titleID.textContent = "Enter a Full-Time Employee"
    }

    if (selector.value === "partTime") {
        hourlyWageDiv.style.display = "block"
        yearlySalaryDiv.style.display = "none"
        console.log("Show Hour Wage")
        fullTimeForm.style.display = "none"
        p.textContent = ""
        titleID.textContent = "Enter a Part-Time Employee"
    }

    if (selector.value === ""){
        yearlySalaryDiv.style.display = "none"
        hourlyWageDiv.style.display = "none"
        fullTimeForm.style.display = "none"
        partTimeForm.style.display = "none"
        p.textContent = ""
        titleID.textContent = "Enter an Employee"
    }

}


function createEmployee() {

    event.preventDefault()

    let name = inputName.value
    let age = parseFloat(inputAge.value)
    let type = employeeType.value
    let p = document.querySelector("p")

    let yearlySalary = parseFloat(inputYearlySalary.value)
    let hourlyWage = parseFloat(inputHourlyWage.value)


    if (type === "fullTime") {
        globalObject = new fullTimeEmployee(name, age, yearlySalary)
        p.textContent = globalObject.getDetails()
        fullTimeForm.style.display = 'block'
    }

    if (type === "partTime") {
        globalObject = new partTimeEmployee(name, age, hourlyWage)
        p.textContent = globalObject.getDetails()
        partTimeForm.style.display = 'block'
    }

    

}

function addFulltimeInfo() {

    event.preventDefault()

    let p = document.querySelector("p")
    let vacationDays = parseFloat(inputVacationDays.value)
    let getVacationsInfo=globalObject.accumulateVacationDays(vacationDays)

    p.textContent = `Your estimated monthly pay is ${globalObject.calculateMonthlyPay()} and you have ${getVacationsInfo} vacation days.`

}

function addParttimeInfo() {

    event.preventDefault()

    let hours = parseFloat(inputWorkedHours.value)
    let pay = globalObject.workHours(hours)

    let p = document.querySelector("p")
    p.textContent = `Your earned pay is ${pay}`



}


window.addParttimeInfo = addParttimeInfo

window.createEmployee = createEmployee

window.addFulltimeInfo = addFulltimeInfo

window.hideForm = hideForm