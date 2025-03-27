let myfetch = fetch("https://jsonplaceholder.typicode.com/users")

myfetch
.then((res)=>{
  return res.json()
})
.then((res)=>{
   return res.filter((ele)=>{
    console.log("Name is:",ele.name)
   })
})