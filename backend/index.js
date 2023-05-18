const express=require("express")
const app=express()
const mongoDB=require("./db")
const port=5000
mongoDB();
app.get("/",(req,res)=>{
    res.send("Hello world---")
})

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.use(express.json())
app.use("/api", require("./Routes/createuser"))
app.listen(port,()=>{
    console.log(`Your port is listening to ${port}`)
})