function Person(name,age){
    this.name=name
    this.age= age
}
Person.prototype.introduce = function(){
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`)
}
let person1 = new Person("umar",22)
person1.introduce()
class Employee extends Person{
    constructor(name,age,jobTitle){
        super(name,age)
        this.jobTitle = jobTitle
    }
    work(){
        console.log(`${this.name} is working as a ${this.jobTitle}`)
    }
    
}
let Employee1 = new Employee("umar", 22,"software development")

Employee1.work()