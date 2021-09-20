
const sql = require('mssql')
var dbconfig={
    server:"employeemanagementdbserver1.database.windows.net",
    database:"ToDoTaskManager",
 user:"ausaf.khan",
 password:"Abbas1994",
 port:1433  
}
var con=new sql.ConnectionPool(dbconfig)
// const conn=sql.connect('Data Source=employeemanagementdbserver1.database.windows.net;Initial Catalog=ToDoTaskManager;Persist Security Info=True;User ID=ausaf.khan;Password=Abbas1994;')

if(con)
{
    console.log("connected")
}
module.exports=con;