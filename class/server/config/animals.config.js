const mongoose = require('mongoose');
const db = process.env.DB;
const connectDB = async() => {
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log(`Established connection to the database`);
    }
    catch(err){
        console.error(err);
    }
}

module.exports = connectDB;