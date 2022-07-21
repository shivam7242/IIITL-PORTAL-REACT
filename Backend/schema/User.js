const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
 
},
{
  collection:"Users"
}



);

module.exports = new mongoose.model("Users", UserSchema);