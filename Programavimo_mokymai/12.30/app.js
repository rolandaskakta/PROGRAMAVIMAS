console.log('oop')

class car {
    constructor(brand, year){
        this.brand = brand ;
        this.year = year;
    }

    getInfo() {
        return `${this.brand} ${this.year}`;
    }

}
const audi = new car('Audi', 2020);

console.log(audi.getInfo());



class BankAccount {
    constructor () {
        this.balansas = 0;
        this.istorija = [];
    }

    idetiPinigu(amount) {
        this.balansas += amount;
        this.istorija.push(`+${amount}`);
        
    }
    isimtiPinigu(amount){
        if(this.balansas > amount){
        this.balansas -= amount;
         this.istorija.push(`-${amount}`);
        } else {
            // this.istorija.push(`NEPAVYKO: -${amount} (nepakankamas likutis)`)
            throw new Error('Nepakankamas likutis');
        }
    }
    gautiBalansa() {
        return this.balansas;
    }
    gautiIstorija() {
        return this.istorija;
    }
}

const saskaita = new BankAccount();

saskaita.idetiPinigu(100);
saskaita.idetiPinigu(150);
saskaita.isimtiPinigu(70);
saskaita.idetiPinigu(750);
saskaita.isimtiPinigu(500);
saskaita.isimtiPinigu(100);


console.log( saskaita.gautiBalansa());
console.log(saskaita.gautiIstorija());

class Student {
    static count = 0
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
        this.grades = [];
        this.metai = new Date().getFullYear();
        Student.count++;
    }
 
    static getStudentCount() {
        return Student.count;
    }
 
    addGrade(grade){
        this.grades.push(grade);
    }
 
    addGradeToFirstPlace(grade){
        this.grades.unshift(grade);
    }
 
    getHighestGrade() {
        return this.grades.length ? Math.max(...this.grades) : null;
    }
 
    getLowestGrade() {
        return this.grades.length ? Math.min(...this.grades) : null;
    }
 
    getAverage() {
        if (this.grades.length === 0) {
            console.log('Pažymių nėra');
        }
 
        let sum = 0;
        this.grades.forEach(grade => {
            sum += grade;
        })
 
        return (sum / this.grades.length).toFixed(2);
    }
 
    assignScolarship(){
        if (this.getAverage() >= 8 ) {
            console.log(`${this.name} is assigned higher scolarship`);
        } else if (this.getAverage() >= 6 ) {
            console.log(`${this.name} is assigned regular scolarship`);
        } else {
            console.log(`The average grade is too low, no scolarship for ${this.name} this semester`);
        }
    }
 
    getAge(){
        return (this.metai - this.birthYear);
 
    }
 
    introduce(){
        return (`sveiki mano vardas ${this.name} man yra ${this.getAge()} metu`)
 
    }
}
 
class onlineStudent extends Student {
    constructor(name, birthYear, platform) {
        super(name, birthYear); // iškviečiam Student constructor
        this.platform = platform;
    }
 
    getAverage() {
        return (super.getAverage() * 0.8).toFixed(2);
    }
 
    calculateAttendance(){
 
    }
}
 
let Aldona = new onlineStudent('Aldona', 2005, 'Zoom');
console.log(Aldona);  
Aldona.addGrade(7);
Aldona.addGrade(9);
Aldona.addGrade(10);
 
 
// sukurti metodą kuris vidurki * 0,8 gražina skaičių
 
 
let Petras = new Student('Petras', 2007);
console.log(Petras);
 
console.log(Student.getStudentCount());
Petras.addGrade(7);
Petras.addGrade(9);
Petras.addGrade(10);
 
console.log(Petras.getHighestGrade());
console.log(Petras.getLowestGrade());
 
console.log(Petras.getAverage());
 
Petras.assignScolarship();
 
console.log(Aldona.getAverage());
Aldona.assignScolarship();


console.log(Petras.getAge());
console.log(Aldona.getAge());

console.log(Petras.introduce());
console.log(Aldona.introduce());

let mathStudents = [
    new Student('Jonas', 2008),
    new Student('Antanas', 2004),
    new onlineStudent('Emilija', 2006, 'Teams')

]


mathStudents.forEach(studentas => {
    studentas.addGrade(8);
    studentas.addGrade(7);
    studentas.addGrade(10);
    studentas.introduce();
    studentas.assignScolarship();

})

console.log(mathStudents)

// instanceof  - typeof
 
console.log(Petras instanceof Student);
console.log(Aldona instanceof onlineStudent);
 
 