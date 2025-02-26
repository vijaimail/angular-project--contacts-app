//import express, router, contactmodel 
const express=require('express')
const router=express.Router()
const Contacts=require('../models/contactmodel')

//get method get(endpoint,async function)
router.get('/count',async (req,res) => {
    try {
        const contactCount=await Contacts.countDocuments()  //method to get the documentcounts
        return res.status(200).json({count:contactCount})  //returning contactcount as response json

    } catch (error) {
        return res.status('500').json({message:error.message})
    }
})


router.get('/all',async (req,res) => {
    try {
       const contacts=await Contacts.find()
       return res.status(200).json(contacts)

    } catch (error) {
        return res.status('500').json({message:error.message})
    }
})


router.post('/add',async (req,res) => {
    try {
        const newcontact= new Contacts(req.body)
        const  {name,phone} =newcontact

        if(!name || !phone)
        {
            return res.status(400).json({message:"Invalid data"})
        }
        const existingContact=await Contacts.findOne({phone:phone})
        if(existingContact)
        {
            return res.status(409).json({message:`Phone number exists with ${existingContact.name}`})
        }
      const savedContact=  await newcontact.save();
        return res.status(201).json({message:`Contact ${name} Added..`})

    } catch (error) {
        return res.status(500).json({message:error.message})
    }
})



router.delete('/delete/:id',async (req,res) => {
    try {
        const id=req.params.id;
        const existingContact=await Contacts.findOne({_id:id})
        if(!existingContact)
        {
            return res.status(401).json({message:`Contact Not Found : ${id}`})
        }

        await Contacts.findByIdAndDelete(id)
        return res.status(200).json({message:`Contact deleted : ${id}`})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
})

router.put('/edit/:id',async (req,res) => {
    try {
        const id=req.params.id;  
        const existingContact=await Contacts.findOne({_id:id})
        if(!existingContact)
        {
            return res.status(401).json({message:`Contact Not Found : ${id}`})
        }
        const updateContact=await Contacts.findByIdAndUpdate(id,req.body,({new:true}))
        return res.status(200).json({message:updateContact})

    } catch (error) {
        return res.status(500).json({message:error.message})
    }
})


module.exports=router

