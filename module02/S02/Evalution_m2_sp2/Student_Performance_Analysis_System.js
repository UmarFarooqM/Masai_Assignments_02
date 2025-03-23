function createStudentManager(){

    let arr=[]
    let updscor=[]
    return {
        addStudent: function(obj){
            arr.push(obj)
            // console.log(obj)
        },
        updateScore: function(subj, upscore){
           let updscor= arr.filter((ele)=>{
                if(ele.subject==subj){
                    ele.score=upscore
                }
            })
            updscor= arr
            console.log(updscor)
        },
        getStudentDetail: function(retstudent){
           let getinfo= arr.filter((ele)=>{
                if(ele.name==retstudent){
                    console.log(ele.name)
                }
                else{
                    console.log("Student not found")
                }
            })
            // console.log(getinfo)
        },

        addsubject : function(addsub,marks){
                for(let key of arr){
                    if(key==arr.subject){
                        arr[addsub]=marks
                    }
                }
                console.log(arr)
        }, 
        insights : function(updscor){
            return  arr.reduce((acc,curr)=>{
                
                return acc+curr.score
            }, 0)
            // console.log(r)
        },
        filtermarks : function(){
            arr.filter((ele)=>{
                if(ele.score<35){
                    console.log(`failed list of students are ${ele.name}`)
                }
            })
        }
    }
    
}
// createStudentManager
let obj={name:"umar", subject:"maths", score:78}
let obj1={name:"farooq", subject:"science", score:82}
// console.log(obj)
let obj2={name:"ram", subject:"maths", score:78}
let obj3={name:"maherra", subject:"maths", score:78}
let funs= createStudentManager()
funs.addStudent(obj)
funs.addStudent(obj1)
funs.addStudent(obj2)
funs.addStudent(obj3)
funs.updateScore("maths", 29)

funs.getStudentDetail("umar")

funs.addsubject("java", 23)
console.log(funs.insights())
funs.filtermarks()

