const express=require('express');
const router= express.Router();
const{
    createContact,
    getContact,
    getContactByID,
    updateContactByID,
    deleteContactByID
}= require('../controllers/contactControllers');


router.post("/create", createContact);
router.get("/", getContact);
router.get("/:id", getContactByID);
router.put("/:id", updateContactByID);
router.delete("/:id", deleteContactByID);

module.exports= router;