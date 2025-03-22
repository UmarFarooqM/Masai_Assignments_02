let c = 0
function loadingscreen(){
let set = setInterval(()=>{
        c++
    console.log("Loading...")

    if(c==5){

        clearInterval(set)
        console.log("Loaded succesfully!")
    }
}, 1000)

}
loadingscreen()

