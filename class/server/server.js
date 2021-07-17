require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

//connect mongoDB with Mongoose
const connectDB = require('./config/animals.config');
connectDB()

//middlewares
app.use(cors({credential: false, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api', require('./routes/animals.routes'));


app.listen(PORT, ()=>{
    console.log(` 1 : Server Lock and Loading on PORT: ${PORT} `);
})
