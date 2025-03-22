let fetchDataHandler= function(){
    return new Promise((resolve,reject)=>{
        let ra= Math.random()*1
        let ran= ra.toFixed(1)
    setTimeout(()=>{
        if(ra>0.5){
            console.log(ra)
            resolve("Success message")
        }
        else{
            console.log(ra)
            reject("error message")
        }
    },1000)

    })
}

fetchDataHandler()
.then((data)=>{
console.log("Fetched data successfully")
})
.catch((data)=>{
console.log("Error fetching data")
});


// console.log(fetchData())
// async function fetchDataHandler(){
//     try{
//         let res = await fetchData()
//         console.log(res)
//     }
//     catch(r){
//         console.log(r)
//     }
//     finally{
//         console.log("runs automatically")
//     }
// }
