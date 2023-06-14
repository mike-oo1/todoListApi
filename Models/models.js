const mongoose  = require("mongoose")
const newSchema= mongoose.Schema({
Name:{
    type:String,
    required:[true,"name is required"],
    unique:true,

},
Class:{
    type:String,
    required:[true,"input your class"]
},

Age:{
     type:Number,
     required:[true,"input your age"]
},
Profile:{
     type:String,
    required:[true,"input a picture"]
}

},{timestamps:true})



const ImageModel = mongoose.model("MODELLER",newSchema)

module.exports =ImageModel