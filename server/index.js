const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
//const twilio = require('twilio');
const nodemailer = require("nodemailer");
const axios=require('axios')
console.log(ObjectId);

const app = express();
app.use(express());
app.use(express.json());
app.use(cors());

const accountSid ="ACbd24b31f4db5bd8ad63df4af3888d222" //"ACbd24b31f4db5bd8ad63df4af3888d222";
const authToken = "2e232bb3363e72d3a6f96c7262fbbcf9";
//const clients = require('twilio')(accountSid, authToken);

//AIzaSyAACG3mLEXEUEDqPCvh6ZFteaLQDnH0YbI

const uri =
  "mongodb+srv://purna:2470purna@cluster0.z2een.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const database = client.db("Mbstu-bus");
    const studentCollcetion = database.collection("student_details");
    const teacherCollcetion = database.collection("teacher_details");

    // app.post('/sendsms',(req,res)=>{
    //    const greenwebsms = new URLSearchParams(); greenwebsms.append('token', 'yourtokenhere'); greenwebsms.append('to', '+88017xxxxxxx'); greenwebsms.append('message', 'test sms'); axios.post('http://api.greenweb.com.bd/api.php', greenwebsms).then(response => { console.log(response.data); });
    // })
    
//sending mail
    app.post('/sendmail',(req,res)=>{
      
        //console.log(req.body)
        const email=[];
        const num=[];
       
        req.body.map((m)=>{
        
          email.push(m.email)
         num.push(m.phone)
          
        })
       console.log("Email",email);
       console.log("NUm", num);
        //[...email,req.body]
 var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'purna.banik164487@gmail.com',
    pass: 'ddvh cspm kssq wjpc'
  }
});

var mailOptions = {
  from: 'purna.banik164487@gmail.com',
  to: email,
  subject: 'Sending Email using Node.js',
  text: 'Bus number 001,003,004 is departing from Mokto Monch within 10 minutes'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
    res.status(400).send("Email Sends Success!")
  } else {
    console.log('Email sent: ' + info.response);
    res.status(200).send("Email Sends Success!")
  }
});
    
const greenwebsms = new URLSearchParams(); 
greenwebsms.append('token', '27450137421708371462aaec4e491646d018373b70a01c17bdf0'); 
greenwebsms.append('to', num ); greenwebsms.append('message', 'Bus number 001,003,004 is departing from Mokto Monch within 10 minutes'); axios.post('http://api.greenweb.com.bd/api.php', greenwebsms).then(response => { console.log(response.data); });


})

    
app.post('/complain',(req,res)=>{
  console.log(req.body)
  res.send("complained")
  const greenwebsms = new URLSearchParams(); 
greenwebsms.append('token', '27450137421708371462aaec4e491646d018373b70a01c17bdf0'); 
greenwebsms.append('to', '01777332208' ); greenwebsms.append('message', req.body.mess); axios.post('http://api.greenweb.com.bd/api.php', greenwebsms).then(response => { console.log(response.data); });
})
    

//send mail to teachers

app.post('/sendteacher',(req,res)=>{
      
  //console.log(req.body)
  const email=[];
  const num=[];
  req.body.map((m)=>{
  
    email.push(m.email)
    num.push(m.phone)
   
    
  })
 console.log("Email",email);
  //[...email,req.body]
var transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
user: 'purna.banik164487@gmail.com',
pass: 'ddvh cspm kssq wjpc'
}
});

var mailOptions = {
from: 'purna.banik164487@gmail.com',
to: email,
subject: 'Sending Email using Node.js',
text: 'Bus number 001,002,005 is departing from Mokto Monch within 10 minutes'
};

transporter.sendMail(mailOptions, function(error, info){
if (error) {
console.log(error);
} else {
console.log('Email sent: ' + info.response);
res.send("Email success")
}
});

const greenwebsms = new URLSearchParams(); 
greenwebsms.append('token', '27450137421708371462aaec4e491646d018373b70a01c17bdf0'); 
greenwebsms.append('to', num ); greenwebsms.append('message', 'Bus number 001,003,004 is departing from Mokto Monch within 10 minutes'); axios.post('http://api.greenweb.com.bd/api.php', greenwebsms).then(response => { console.log(response.data); });
})






    
    //send sms

     
    
// Your Twilio Account SID and Auth Token


// Create a Twilio client


// Sample list of users and their phone numbers
// const users = [
//   { name: 'User1', phoneNumber: '+8801777332208' },
 
//   // Add more users here
// ];

// Function to send SMS to all users
// async function sendSMS() {
//   for (const user of users) {
//     try {
//       await clients.messages.create({
//         body: 'Hello, ' + user.name + '! This is a test SMS from Twilio.',
//         from: '+12566678431', // Your Twilio phone number
//         to: user.phoneNumber,
//       });
//       console.log(`SMS sent to ${user.name} at ${user.phoneNumber}`);
//     } catch (error) {
//       console.error(`Error sending SMS to ${user.name}: ${error.message}`);
//     }
//   }
// }

// Call the sendSMS function to send messages
//sendSMS();
    
    //console.log(sms);
    

    app.post('/sendsms', async(req,res)=>{
      clients.messages
      .create({
         body: 'Bus number 001, 003, 004 is departing from Mokto Monch within 10 minutes',
         from: '+16065369838',
         to: '+8801643423006'
       })
      .then(message => res.send(message.sid));

      
    })




    app.post("/student", async (req, res) => {
      const user = req.body;
      //console.log(req.body);
      const result = await studentCollcetion.insertOne(user);
     // console.log(result);
      res.json(result);
    });

    //post user data

    app.post("/teacher", async (req, res) => {
      const user = req.body;
      //console.log(user);
      const result = await teacherCollcetion.insertOne(user);
      //console.log(result);
      res.json(result);
    });

    console.log("database connected");

    //get book data
    app.get("/student", async (req, res) => {
      const cursor = studentCollcetion.find({});
      const result = await cursor.toArray();
     // sms.push(result)
      res.send(result);
    });

    //get single student
    app.get('/student/:email',async(req,res)=>{
      const options = {
        // Sort returned documents in ascending order by title (A->Z)
        
        projection: { _id: 0,    password:0, re_password:0 },
      };
      const result = await studentCollcetion.findOne({email:req.params.email},options)
      //console.log(result)
      res.send(result);
    })
    //get user data
    app.get("/teacher", async (req, res) => {
      const cursor = teacherCollcetion.find({});
      const result = await cursor.toArray();
      res.send(result);
    });

    //get single teacher
    app.get('/teacher/:email',async(req,res)=>{
      const options = {
        // Sort returned documents in ascending order by title (A->Z)
        
        projection: { _id: 0, category: 0,   password:0, re_password:0 },
      };
      const result = await teacherCollcetion.findOne({email:req.params.email},options)
      //console.log(result)
      res.send(result);
    })

    app.get('/teachers',async(req,res)=>{
      const cursor = teacherCollcetion.find({notification:"on"})
      const result = await cursor.toArray();
     // sms.push(result)
      res.send(result);
    })
    
    app.get('/students',async(req,res)=>{
     
     const cursor = studentCollcetion.find({notification:"on"})
      const result = await cursor.toArray();
     // sms.push(result)
      res.send(result);
    })

    //recive single book student data
    
    // app.get("/student/:email", async (req, res) => {
    //   //console.log(req.params.email);s
     
   
    //   const result = await studentCollcetion.findOne({email:req.params.email})
    //   //console.log(result)
    //   res.send(result);
    // });

    // app.get("/teacher/:email", async (req, res) => {
    //   //console.log(req.params.email);
     
   
    //   const result = await teacherCollcetion.findOne({email:req.params.email})
    //   //console.log(result)
    //   res.send(result);
    
    // });
    //recived book info
    app.post("/student/:email", async (req, res) => {
     
      console.log(req.body)
      const id=req.params.email;
      const notification=req.body.notification;
      //const todoDesc=req.body.todoDesc;
      //const todoUpdateDate=Date.now()
      const body={
          notification:notification,
          //todoDesc:todoDesc,
          //todoUpdateDate:todoUpdateDate
      }
      const result = await studentCollcetion.updateOne({email:id}, {$set:body});
      res.send(result)
      console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
      );
    
     
    });

    app.post('/teacher/:mail', async(req,res)=>{
      console.log(req.body)
      const id=req.params.mail;
      const notification=req.body.notification;
      //const todoDesc=req.body.todoDesc;
      //const todoUpdateDate=Date.now()
      const body={
          notification:notification,
          //todoDesc:todoDesc,
          //todoUpdateDate:todoUpdateDate
      }
      const result = await teacherCollcetion.updateOne({email:id}, {$set:body});
      res.send(result)
      console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
      );
    
    })


      app.post('/makeadmin/student',async(req,res)=>{
        console.log(req.body)
    
      const role="admin"
      const email=req.body.email
        
      const body={
          role:role,
          //todoDesc:todoDesc,
          //todoUpdateDate:todoUpdateDate
      }
      const result = await studentCollcetion.updateOne({email:email}, {$set:body});
      res.send(result)
      console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
      );
      })

      app.post('/makeadmin/teacher',async(req,res)=>{
        console.log(req.body)
    
      const role="admin"
      const email=req.body.email
        
      const body={
          role:role,
          //todoDesc:todoDesc,
          //todoUpdateDate:todoUpdateDate
      }
      const result = await teacherCollcetion.updateOne({email:email}, {$set:body});
      res.send(result)
      console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
      );
      })




    const saveUser = (email, displayName, method) => {
      const user = { email, displayName };
      fetch("http://localhost:5000/users", {
        method: method,
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          //console.log(data);
        });
    };
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Welcome to Real_Time_Bus_Alaraming_System");
});













app.listen(5000, () => {
  console.log("server is listenning");
});




















