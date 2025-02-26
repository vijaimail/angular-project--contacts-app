//import mongoose to access schema
const mongoose=require('mongoose')

//schema name and structure
const contactSchema= new mongoose.Schema({
    profile:{
        type:String,
        required:false
    },
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    }
})

//creating collection 'Contacts'
const contacts=mongoose.model('Contacts',contactSchema)

//exporting the contacts module to access outside
module.exports=contacts