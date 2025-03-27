
function createInventoryItem(name,category,price){

    let inventory_system={}

    inventory_system.name=name
    inventory_system.category= category
    inventory_system.price = price
    inventory_system.describeItem = function(){
        console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`)
    }
    
    return inventory_system
   

}

const item = createInventoryItem("Laptop", "Electronics", 1500);
// console.log(item)
item.describeItem();
// Output: Item: Laptop, Category: Electronics, Price: 1500

function addItemDiscount(Item, discount)
{

   return { 
     discountedprice  :  item.price - (item.price*discount/100),
    applyDiscount :function (discountedprice){
        console.log(`Discounted Price for ${item.name}: ${this.discountedprice}`)
    }
}

}
const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();
// discountedItem()
// Output: Discounted Price for Laptop: 1350
