require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT;

//connect mongoDB with Mongoose
const connectDB = require('./config/animals.config');
connectDB()

//middlewares
app.use(cors());
app.use(express());
app.use(express.urlencoded({extended:true}));

//routes
//app.use('/api', require('./routes/animals.routes'));


app.listen(PORT, ()=>{
    console.log(` 1 : Server Lock and Loading on PORT: ${PORT} `);
})
