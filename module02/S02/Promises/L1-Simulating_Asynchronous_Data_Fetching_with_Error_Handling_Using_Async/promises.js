let delivery = new Promise ((res,rej)=>{
    let apicall=true;
    setTimeout(()=>{
        if(apicall){
            res("delivery on the way")
        }
        else{
            rej("Order not place")
        }
    },1000)
})
console.log(delivery)

delivery.then((parameter)=>{
    console.log("runs for resolve", parameter)
})
.catch((parameter)=>{
    console.log("runs for reject", param)
})
