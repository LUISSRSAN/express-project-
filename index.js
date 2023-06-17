const express = require ('express')
const bodyParser = require('body-parser');
const app = express()
let favbooks =[{title: "Peace and World"}]
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.get('/',(req,res)=> {
    res.send("Hello World")
});
app.get('/dashboard',(req,res)=>{
    res.send("this is the dashboard")
});
app.get('/books',(req,res)=>{
    
     res.json(favbooks)
});
app.post('/addbook',(req,res)=>{
    const book = req.body;
    console.log(book)
    favbooks.push(book)
    res.send("Your book has been added")
});
app.listen(5001,()=>{
    console.log("App listening in port 5001 ")
});