// module.exports ={
//     mongoURI : 'mongodb+srv:etc'

// };

require("dotenv").config();

module.exports = {
  mongoURI: process.env.MONGODB_URI,
};
