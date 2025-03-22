

function timer(duration,onComplete){
    setTimeout(()=>{
        onComplete(`Timer of ${duration} ms finished`)
    }, duration )

}


 
timer(2500,(information)=>{
    console.log(information)
})
