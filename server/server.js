const express=require("express");
const cors=require("cors");
const bodyParser=require("body-parser");
const con=require("./db")
const app=express();
app.use(cors());
app.use(bodyParser.json());
const sql = require('mssql')

app.get("/tasks",(req,res)=>{
    const task_query="select * from task"
    var req1=new sql.Request(con)
    con.connect(function () {
        req1.query(task_query,function (err,response) {
            if(err) console.log(err)
                else res.send(response)
        })
    });
})
app.post("/addTask",(req,res)=>{
    //const task_query="select * from task"
    var a=req.body.task
    console.log(typeof(a))
    const task_query="insert into task values ('"+a+"')"
    var req1=new sql.Request(con)
    con.connect(function (err) {
        if(err){
        console.log(err)
        return;
        }
        req1.query(task_query,function (err,recordset) {
            if(err){
                console.log(err)
                } 
                else
                console.log(recordset)

            con.close()
        })
    });
    console.log("task",req.body)
})
app.delete("/deleteTask:taskid",(req,res)=>{
    console.log(req.params.taskid)
    const task_query="delete from task where Taskid='"+req.params.taskid+"'"
    var req1=new sql.Request(con)
    con.connect(function () {
        req1.query(task_query,function (err,response) {
            if(err) console.log(err)
                else console.log("deleted")
        })
    });

    res.send("delete tasks")
});
app.listen(4000,()=>{console.log("running on port 4000")})