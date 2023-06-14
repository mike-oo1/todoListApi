const express= require("express")
const app= express()
const route =require("./Router/route")
app.use(express.json())
const config =require("./Config/config")
app.use("/api",route)


module.exports= app 

