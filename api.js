// api.openweathermap.org/data/2.5/weather  //endpoint
// ?q=Kolkata&appid=e72ca729af228beabd5d20e3b7749713&unit=metric  //path parameters 

// //authentication  use postman
// data={
//     name:"harry",
//     age:30
// }
// console.log(JSON.stringify(data))

//npm install body-parser  
// const express=require("express");
// const app=express()
// const bodyparser=require("body-parser")
// app.use(bodyparser.urlencoded({extended:true}));
// const https=require("https")

// app.get("/",function(request,respond){

//     respond.sendFile(__dirname + "/index.html");


//     // const location="Kalyani"

//     // https.get("https://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=a560e2806ba4ba792056626e74e3516c",function(res){
//     //     console.log(res)
//     //     console.log(res.statusCode)
//     //     // res.send("kaise ho")

//     //    res.on("data",function(data){
//     //   //  console.log(data)
//     //  const weather= JSON.parse(data)
//     //   console.log(weather) 
//     //  const temp=weather.main.temp
//     //  const wind=weather.wind.speed
//     //  const icon=weather.weather[0].icon
//     //  const img="http://openweathermap.org/img/wn/"+icon+"@2x.png"
//     //  console.log(temp,wind)
//     //   respond.write("<h1>the temp is:"+temp+"units</h1>");  //one respond.send
//     //   respond.write("<img src="+img+">");  //for more than 1 data use write
//     //    })
//     // })
//     //respond.send("hello"); 
//     });
// //6



   
// app.post("/",function(request,respond){
//        const location=request.body.cityname

//     https.get("https://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=a560e2806ba4ba792056626e74e3516c",function(res){
//        // console.log(res)
//         console.log(res.statusCode)
//         // res.send("kaise ho")

//        res.on("data",function(data){
//       //  console.log(data)
//      const weather= JSON.parse(data)
//       console.log(weather) 
//      const temp=weather.main.temp
//      const wind=weather.wind.speed
//      const icon=weather.weather[0].icon
//      const img="http://openweathermap.org/img/wn/"+icon+"@2x.png"
//      console.log(temp,wind)
//       respond.write("<h1>the temp is:"+temp+"units in "+location+"</h1>");  //one respond.send
//       respond.write("<img src="+img+">");  //for more than 1 data use write
//        })
//     })
//     // respond.send("hello"); 
//     console.log(request.body.cityname)               //receiving data 
//  //console.log("received")
// })

// app.listen(3000,()=>{
//     console.log("server started")
// });


//mail project



// const express=require("express")
// const request=require("request")
// const bodyparser=require("body-parser")
// const https=require("https")
// const { subscribe } = require("diagnostics_channel")
// const app=express()
// app.use(express.static("public"))   //for css implement
// app.use(bodyparser.urlencoded({extended:true}));
// app.get("/",function(request,respond){

//     respond.sendFile(__dirname + "/pahla.html");


//     });

// app.post("/",function(request,respond){
       
//   var name=request.body.email
 
//   // console.log(name)
//   // respond.send(name) 
 

// var data = {
//   members: [
//       {
//           email_address: "example@email.com",
//           name: "John Doe",
//           status: "subscribed"
//             // merge_fields:{
//       //   FNAME:f,
//       //   LNAME:l
//       // }
//       },
//       {
//           email_address: "another@example.com",
//           name: "Jane Smith",
//           status: "subscribed"
//       }
//   ]
// };

// var j = JSON.stringify(data);
// const url="https://us21.api.mailchimp.com/3.0/lists/b53b6e137"
// const options={
//   method:"POST",
// auth:"avi:7a019201ccb1cc12d55efad8c87fd5b6-us21"

// }
// const req=https.request(url,options,function(response){

// response.on("data",function(data){
//   console.log(JSON.parse(data))
//   response.send(JSON.parse(data))
// })

// })

// req.write(data)
// req.end()
// });


// // if(response.statusCode===200){
// //   //respond.send("sucess")
// //   respond.sendFile(__dirname + "addn.html");
// // }
// // else{
// //   respond.send("try later")
// // }


// // app.post("/failure",function(request,respond){
       
// //   respond.redirect("/")
// // })



// app.listen(process.env.PORT||3000,()=>{
//   //process.env.PORT
//     console.log("server started")
// });

// api key
// 7a019201ccb1cc12d55efad8c87fd5b6-us21
// list id
//fb53b6e137
// const url = `https://us21.api.mailchimp.com/3.0/lists/fb53b6e137`; // Replace with your MailChimp API key and list ID

//     const apiKey = "7a019201ccb1cc12d55efad8c87fd5b6-us21"; // Replace with your MailChimp API key
    const express = require("express");
    const bodyParser = require("body-parser");
    const https = require("https");
    
    const app = express();
    
    app.use(express.static("public")); // For CSS implementation
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.get("/", function (request, response) {
        response.sendFile(__dirname + "/padhai.html");  //ami send korchi oi jaygat gele padhai.html e chole jbe
    });
    
    app.post("/", function (request, response) {
        const email = request.body.emailId;     //amr chai kiki bhoreche
        const name = request.body.name;
        const password = request.body.password;
        const phone=request.body.phn;
        // Basic form validation
        if (!email || !name || !phone) {
            return response.status(400).send("All fields are required.");
        }
    
        const data = {
            members: [
                {
                    email_address: email,
                    status: "subscribed",
                    
                    merge_fields: {
                        FNAME: name,
                        PHONE: phone //inside merge fields
                    }
                }
            ]
        };
    
        const jsonData = JSON.stringify(data);
    
        const apiKey = "7a019201ccb1cc12d55efad8c87fd5b6-us21";
       // const listId = "YOUR_MAILCHIMP_LIST_ID"; // Replace with your MailChimp list ID
        const url = `https://us21.api.mailchimp.com/3.0/lists/fb53b6e137`;
    
        const options = {
            method: "POST",
            headers: {
                "Authorization": `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`
            }
        };
    
        const req = https.request(url, options, function (res) {
            let responseData = "";
    
            res.on("data", function (chunk) {
                responseData += chunk;
            });
    
            res.on("end", function () {
                console.log(responseData);
                if (res.statusCode === 200) {                      
                    response.sendFile(__dirname + "/addn.html");   //jdi response thik hye oder akta jaygay send korbo
                } else {
                    response.sendFile(__dirname + "/failure.html");
                }
            });
        });
    
        req.on("error", function (error) {
           
            console.error(error);
            response.status(500).send("Error subscribing user.");
        });
        
        req.write(jsonData);
        req.end();
    });
    
    app.listen(process.env.PORT || 3000, () => {
        console.log("Server started");
    });
    



// Mailchimp provides several standard fields that you can use to collect information about your subscribers. These fields are associated with each subscriber in your audience and can be used for personalization and segmentation. Here are some of the common standard fields in Mailchimp:

// Email Address: This is the primary field used to identify subscribers and send emails to them.

// First Name (FNAME): First name of the subscriber, which can be used for personalization in email campaigns.

// Last Name (LNAME): Last name of the subscriber, also useful for personalization.

// Address: You can collect physical address information, including street address, city, state, postal code, and country.

// Phone Number: If you need to collect phone numbers from subscribers.

// Birthday: You can use this field to collect the subscriber's birthday for sending birthday-related emails or offers.

// Language: The preferred language of the subscriber.

// Source: You can use this field to track where the subscriber was added to your list, such as through a specific signup form or campaign.

// Date Added: The date when the subscriber was added to your list.

// Tags: Tags allow you to categorize subscribers into different groups or segments based on their interests, behaviors, or characteristics.