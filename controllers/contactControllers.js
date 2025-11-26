
const Contact=require('../model/contactModel');


exports.createContact= async(req,res)=>{
    try{
        const{name, email, phone}=req.body;
        const newContact=await Contact.create({name, email, phone});
        res.status(201).json({message:"Contact created",data: newContact});
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

exports.getContact= async(req,res)=>{
    try{
        const allContact=await Contact.find();
        res.status(200).json({message:"Contacts", data: allContact});
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

exports.getContactByID= async(req,res)=>{
    try{
        const id= req.params.id;
        const contactByID=await Contact.findById(id);
        if(!contactByID){
            return res.status(404).json({message:"Contact not found"});
        }
        res.status(200).json({message:"Contact found",data: contactByID});
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

exports.updateContactByID= async(req,res)=>{
    try{
        const id=req.params.id;
        const{name, email, phone}=req.body;
        const updateContactByID=await Contact.findByIdAndUpdate(
            id,
            {name, email, phone},
            {new: true}
        );

        if(!updateContactByID){
            return res.status(404).json({message: "Contact not found"});
        }
        res.status(200).json({message:"Contact Updated", data: updateContactByID});        
    }catch(err){
        res.status(500).json({message: err.message});
    }

};

exports.deleteContactByID= async (req,res)=>{
    try{
        const id= req.params.id;
        const deleteContactByID=await Contact.findByIdAndDelete(id);
        if(!deleteContactByID){
            return res.status(404).json({message: "Contact not found"});
        }
        res.status(200).json({message:"Contact Deleted"});
    }catch(err){
        res.status(500).json({message: err.message});
    }
};