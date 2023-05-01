// set up the server
const express = require("express"); //you don't need semicolons btw but you can use them for style purposes
const app = express();
const logger = require("morgan");
const port = 3000;
//start the server

app.use(logger("dev"));
app.use(express.static(__dirname + '/public')) ;

app.listen(port,()=>{
    console.log(`App server listening on ${port}`)
})

// define a route for the default home page
app.use((req, res, next) =>{
    console.log(`${req.method} ${req.url}`);
    next ();
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html") ;
});


//define a route for the assignment list page
app.get("/to-be-read",(req, res) => {
    res.sendFile(__dirname + "/views/toBeRead.html");
});





//define a route for the details page
//app.get("/assignments/details",(req, res) => {
    //res.send("<h1>This is the assignment detail page.</h1>");
//});