export class Employee{

        constructor(name, age, salary){
            this.name= name 
            this.age= age
            this.salary= salary
        }
        getDetails(){
            return `Your name is ${this.name}, your age is ${this.age} and your salary is ${this.salary}`
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
             return this.monthlyPayment
        }


        accumulateVacationDays(vacationDays){
            this.vacationDays= this.vacationDays + vacationDays;
            return this.vacationDays
        }
}

export class partTimeEmployee extends Employee{

        constructor(name, age, salary, hourlyWage){
            super(name, age, salary)
            this.hourlyWage= hourlyWage
            this.payment= 0
        }
        workHours(hours){
            this.payment= (this.hourlyWage * hours);
            return this.payment
        }
}