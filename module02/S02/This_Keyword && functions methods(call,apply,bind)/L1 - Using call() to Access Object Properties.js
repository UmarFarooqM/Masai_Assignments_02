function personalInfo(){
    console.log(this.name, this.age)
}

let obj={
    name:"umar",
    age: 23
}
let cals= personalInfo
cals.call(obj)