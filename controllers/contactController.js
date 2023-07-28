const Contact = require('../models/mongoDbMalla')

module.exports ={
    create: async(req, res)=>{

        const newContact = new Contact({
            ...req.body
        })

        const insertContact = await newContact.save()

        return res.status(201).json(insertContact)
    }
}