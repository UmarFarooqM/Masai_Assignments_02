async function operations(){
    try{
        let myfetch = await fetch("https://fakestoreapi.com/products")
        let data = await myfetch.json()
        data.map((products)=>{
                console.log("The product name is ", products.title)
        })
        
        let productprice_sum =data.reduce((acc,curr)=>{
            return acc+curr.price
        },0)
        console.log("Sum of all the products price is ",productprice_sum)
    
    }

    catch(error){
        console.log("Failed to fetch products. Please try again later",error)
    }

}
    
    operations()