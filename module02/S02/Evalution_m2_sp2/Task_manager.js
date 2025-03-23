function manager(){
    let tasks=[]
    return {
        addTasks: function(id,status){
            tasks.push({uniqueid:id, Tstatus:status})
            console.log(tasks)
        },
        getAllTasks: function(){
            let dup= (JSON.parse(JSON.stringify(tasks)))
            let json = JSON.stringify(dup)
            console.log(json)
        },
        markscomplete: function(statuscomplete){
            // let st=""
            for(let prop of tasks){
                if(prop.Tstatus==statuscomplete){
                    console.log(`The given taskid ${prop.uniqueid} marked as complete`)
                }
            }
            // console.log(st)
        },
        removetask : function(rtaskid){
            for(let prop of tasks){
                if(prop.uniqueid==rtaskid){
                    tasks.pop()
                    console.log(tasks)
                }
            }
            // console.log(tasks)
        },
        getpending: function(){
            let pendinglist=tasks.filter((ele)=>{
                if(ele.Tstatus== "pending"){
                    return ele
                }
            })
            console.log(pendinglist)
        }, 
        getcompeltedtask: function(){
            let filcompleted=  tasks.filter((ele)=>{
                if(ele.Tstatus== "completed"){
                    // console.log(ele)
                    return ele
                }
            })
            console.log(filcompleted)
        },
        sortTask: function(){
            let sortlist= tasks.sort((a,b)=>{
                return a.Tstatus.localeCompare(b.Tstatus)
            }).map((ele=>{
                return ele
            }))
            console.log(sortlist)
        }
        
    
    }
    
}

let funs = manager()
funs.addTasks(12, "completed")
funs.addTasks(5, "pending")
funs.addTasks(1, "pending")
funs.addTasks(2, "completed")
funs.addTasks(3,"pending")

funs.getAllTasks()
funs.markscomplete("completed")
funs.removetask("2")
funs.removetask("3")

funs.getpending()
funs.getcompeltedtask()

funs.sortTask()



