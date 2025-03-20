
function extractAndReverse(arr){
   let newarr= arr.slice(3,5)
   let rev=[]
   
  
   for(let i=newarr.length-1;i>=0;i--){
    rev.push(newarr[i])
   }
   return rev
    
}
let arr=[15, 30, 45, 60, 75, 90]
console.log(extractAndReverse(arr))