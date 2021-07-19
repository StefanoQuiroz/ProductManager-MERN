require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cookieParser = require('cookie-parser');

//
//connect mongoDB with Mongoose
const connectDB = require('./config/animals.config');
connectDB()

//middlewares
app.use(cookieParser())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api', require('./routes/animals.routes'));
app.use('/api', require('./routes/users.routes'));


app.listen(PORT, ()=>{
    console.log(` 1 : Server Lock and Loading on PORT: ${PORT} `);
})
