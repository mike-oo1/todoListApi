const express= require("express")
const mongoose= require("mongoose")
const apps = require("./app")
const app=express()
app.use(apps)
app.use(express.urlencoded({extended:true}))
const config = require("./Config/config.js")

mongoose
.connect("mongodb://127.0.0.1/profileApi")
.then(()=>{
    console.log("connected to database")
}).then(()=>{
    app.listen(( 6700),()=>{
        console.log("server is running on port")
    })
})
.catch((error)=>{
    console.log(error.message)

})