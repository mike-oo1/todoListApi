const express =require("express")
const mongoose =require("mongoose")
const path = require("path")

const ImageModel = require("../Models/models")

exports. newUser =async(req,res)=>{
try {
    const data ={Name:req.body.Name,
        Class:req.body.Class,
        Age:req.body.Age,
        Profile: req.file.path   
    }
    const newUser =await ImageModel.create(data)
    if(newUser){
        res.status(200).json({
            message:"this user has been created",
            data:newUser,
            file:`the file size uploaded is ${Math.floor(req.file.size)} mb`
        })
    }else{
        res.status(400).json({
            message:"cannot create"
        })
    }   
} catch (error) {
    res.status(500).json({
        message:error.message
    })
    
}
}