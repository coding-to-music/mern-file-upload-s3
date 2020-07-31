 
// module.exports ={
//     mongoURI : 'mongodb+srv://KrishanSharma:Northwest@123@cluster0-briyc.mongodb.net/?retryWrites=true&w=majority'

// };

require("dotenv").config();

module.exports ={

mongoURI : process.env.MONGO_DB
};