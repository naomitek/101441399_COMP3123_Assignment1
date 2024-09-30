var http = require("http");
//TODO - Use Employee Module here
var emps = require("./Employee.js");

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        // http://127.0.0.1:8081/ 
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, {'Content-Type': 'text/html'}); 
            res.end("<h1>Welcome to Lab Exercise 03</h1>")
        }

        // http://127.0.0.1:8081/employee 
        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            return res.end(JSON.stringify(emps))
        }

        // http://127.0.0.1:8081/employee/names 
        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            var empFullName = [];
            for (const [key, value] of Object.entries(emps.employees)) {
                empFullName.push((value.firstName + " " + value.lastName));} 
            return res.end(JSON.stringify(empFullName.sort()))
        }

        // http://127.0.0.1:8081/employee/totalsalary 
        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }
            res.setHeader('Content-Type', 'application/json;charset=utf-8'); 
            var obj ={ "total_salary" : 0 };
            for (const [key, value] of Object.entries(emps.employees)) {
                obj.total_salary += value.Salary;}
            return res.end(JSON.stringify(obj))
    }
    // res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})