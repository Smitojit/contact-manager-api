const express= require('express');
const dotenv= require('dotenv');

dotenv.config();

const connect=require('./config/db');
connect();
const app= express();
app.use(express.json());

const contactRoutes= require('./routes/contactRoutes');
app.use('/api/contacts', contactRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server running on PORT no ${process.env.PORT}`);
});