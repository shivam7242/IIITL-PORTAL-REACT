const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const Users = require('./schema/User');
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  'mongodb+srv://kanishk_0012:kanukrishna@cluster0.jvwy6.mongodb.net/Users_Data?retryWrites=true&w=majority',
  {
    useNewUrLParser: true,
    useUnifiedTopology: true,
  }
);

var db = mongoose.connection;
db.on('error', () => console.log('error in connecting to database'));
db.once('open', () => console.log('connected to db'));

app.post('/', async function (req, res) {
  let Email = req.body.email;
  let Password = req.body.password;

  // let data={"Name": "Testuser2", "Email": "Test_user2@gmail.com", "Password": "Test@2"}
  // db.collection('users').insertOne(data,(err,collection)=>{
  //     if(err){
  //         throw err;
  //     }
  //     console.log("record inserted successfully")
  // })

  // const newUser = new Users({"Name": "Testuser1", "Email": "Test_user1@gmail.com", "Password": "Test@1"}).save();

  let k = await Users.findOne({ Email });
  if (k) {
    if (k.Password === Password) {
      res.status(200).json(k);
    } else res.status(400).json({ error: 'Wrong Password' });
  } else {
    res.status(400).json({ error: "User doesn't exist" });
  }
  console.log(k);
});

app.listen(4000, function () {
  console.log('The server is running on port 4000');
});
