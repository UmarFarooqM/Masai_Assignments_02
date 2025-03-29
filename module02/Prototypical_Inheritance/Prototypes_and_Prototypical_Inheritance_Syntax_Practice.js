function Animal(name){
    this.type=name
}
Animal.prototype.sound=function(){
    console.log("Animal sound")
}

class Dog extends Animal{
    constructor(name,bark){
        super(name)
        this.bark=bark
    }
    sound(){
        console.log(this.bark)
    }
}
let animal=new Animal("Dog")
animal.sound()
let myDog=new Dog("Dog","Bowbow")
console.log(MyDog)
myDog.sound()


// let cat = new Animal("i dont know what t o")
// function Dog(name,bark){
//     this.name=name
//     // let myDog={}
//     // cat.sound = "Bark" 
//     // console.log(cat.sound)
//     // myDog = cat.sound
//     // console.log(myDog)
// }
// Dog()