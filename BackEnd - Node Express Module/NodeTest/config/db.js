//import mongoose
const mongoose=require('mongoose') 
//connect mongoose
mongoose.connect("mongodb+srv://mailboxofvj:SamplePassword@samplecluster1.vwfs6.mongodb.net/?retryWrites=true&w=majority&appName=SampleCluster1")
const connection=mongoose.connection

//if connection created,
connection.on('connected',()=>{console.log('db connected..')})

//if connection not created,
connection.on('error',()=>{ console.log('db not connected..')})

//export the module always
module.exports=mongoose