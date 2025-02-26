// import express,db dependency
const express =require("express")
const cors =require("cors") //import cors origin
const db=require('./config/db') //
const Contactroute=require('./routes/Contactroute')

const port=3000;

// app object for express constructor
const app=express()

//include exprees, and cors
app.use(express.json())
app.use(cors())

//get method for the home page(route, callback)
app.get('/',(req,res)=>{
    res.status(200).json({message:"Welcome to express"})
})

//base end point for the route 
app.use('/contacts',Contactroute)

//starting the server
app.listen(port,(()=>{
    console.log(`Server Running on port:${port}`)    
}))

