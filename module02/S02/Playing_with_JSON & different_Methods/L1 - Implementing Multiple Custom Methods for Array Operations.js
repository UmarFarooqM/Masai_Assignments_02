function custmethods(arr1,arr2){
   even=[]
   let res=0
   return {
      filterEvenNUmbers:function(){
         even=arr1.filter((ele)=>{
            return ele%2==0
         })
      return even
      },
     sumOfArray:function(){
         let sum=even.reduce((acc, curr)=>{
            return acc+curr        
         }, 0)
         return sum
      }, 
     sortAndConcat: function(){
      let sort1=even.sort((a,b)=>a-b)
      let sort2=arr2.sort((a,b)=>a-b)
      return sort1.concat(sort2)    
   }
}
     
}

let arr1=[6,8,10,5,7,15]
let arr2= [10,4,9,1]
let fil=custmethods(arr1,arr2)
console.log(fil.filterEvenNUmbers())
console.log(fil.sumOfArray())
console.log(fil.sortAndConcat())