function Car(make,model,year,isAvailable){
    this.make=make 
    this.model = model 
    this.year=year 
    this.isAvailable=true 
}
function Customer(name){
    this.name = name 
    this.rentedCars = []
}
Customer.prototype.isrentCar =function(car){
    if(car.isAvailable==true){
        this.rentedCars.push(car) 
        car.isAvailable=false
        console.log("car has rented succesfully")
    }
    else{
        console.log("car is already rented")
    }
}
Customer.prototype.carReturns=function(car) {
    setTimeout(()=>{
        // car.isAvailable = true 
        let arr =[]
        for(let ele of this.rentedCars){
            if(car.name!=ele.name){
                arr.push(ele)
            }
        }
        if(arr.length==this.rentedCars.length){
            console.log("Car not found")
        }
        else{
            this.rentedCars = arr
            console.log("car added")
        }
    },2000)
}
function PremiumCustomer(name,discountRate){
    let obj = new Customer(name)
    obj.discountRate = discountRate 
    return obj
}
function calculateRentalPrice(car,days,isPremium){
    let basePrice=50 
    let total = basePrice*days
    if(isPremium){
        total = total - (total*(10/100))
    }
    else{
        total=total
    }

    return total

}
function Maintenance(car,delay){
    setTimeout(()=>{
        car.isAvailable =true
    },delay)
}
let car1 = new Car("Toyota","Corolla",2020,true)
console.log(car1)

let car2 = new Car("suzuki","swift",2025,false)
console.log(car2)
let Customer1 = new Customer("umar farooq")
console.log(Customer1)//regular
Customer1.isrentCar(car1);
Maintenance(car1,1000) 
Customer1.isrentCar(car1);
Customer1.carReturns(car1);

let premiumCustomer = new PremiumCustomer("rohit", 0.1);
console.log(premiumCustomer);

let rentalPrice = calculateRentalPrice(car1, 5, true);
console.log("Total Rental Price:", rentalPrice);