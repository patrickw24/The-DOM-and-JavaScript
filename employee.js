export class Employee{

        constructor(name, age, salary){
            this.name= name 
            this.age= age
            this.salary= salary
        }
}


export class fullTimeEmployee extends Employee{


        constructor(name, age, salary, yearlySalary){
            super(name, age, salary)
            this.yearlySalary= yearlySalary
            this.vacationDays= 0
            this.monthlyPayment= 0
        }
        calculateMonthlyPay(){

             this.monthlyPayment = (this.yearlySalary / 12)
        }

        accumulateVacationDays(vacationDays){
            this.vacationDays= this.vacationDays + vacationDays
        }
}

export class partTimeEmployee extends Employee{

        constructor(name, age, salary, hourlyWage){
            super(name, age, salary)
            this.hourlyWage= hourlyWage
            this.payment= 0
        }
        workHours(hours){
            this.payment= (this.hourlyWage * hours)
        }
}