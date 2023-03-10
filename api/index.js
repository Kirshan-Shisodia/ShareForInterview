import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import Routes from './server/route.js';

const app = express();  



app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/movies', Routes);


// const URL = 'mongodb+srv://user:admin@crud.mttfv.mongodb.net/studentsDatabase?retryWrites=true&w=majority'
const URL = 'mongodb+srv://admin:admin@cluster0.thxd8ol.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || '8090'; 


mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => { 
   
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})


