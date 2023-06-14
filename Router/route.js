const express = require("express")
const multer=require("../Multer/multer")
const Router =express.Router()
const {newUser}=require("../Controller/controller")

Router.route("/create").post(multer,newUser)

module.exports = Router
