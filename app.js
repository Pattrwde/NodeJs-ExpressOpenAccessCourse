// run main app
//โค้ดพื้นฐาน
const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();   
// const port = 3000;   // app run port ? ห้ามทับกับ port อื่นที่ใช้งานอยู่ในเครื่อง
const PORT = process.env.PORT || 4000;

// เรียกใช้งาน morgan
app.use(morgan('combined'));
// เรียกใช้งาน path :dirname = ชื่อไดเล็กทอรี่, ชื่อที่อยู่ไฟล์
app.use(express.static(path.join(__dirname,"/public/")));

// มี . เพื่อที่จะระบุว่าเราต้องการเข้าถึงโฟล์เดอร์
// เรียกใช้งาน ejs
app.set("views","./src/views");
app.set("view engine","ejs")

// จัดการกับ Request ต่างๆ ที่เข้ามา เมื่อเข้ามาจะส่ง/แสดงอะไรให้เขาดู
app.get("/", (req,res) =>{

    // res.send('Hello borntoDev1111 co Hi!!');
    //{} สามารถใส่เป็น part data ที่เป็น array ได้
    res.render('index',{username: 'viewza55+', customers:["Kitti","Patta","Tana"]});

})

// ให้ app รอฟังที่ port และตามด้วยที่จะอยากให้เขากระทำ
app.listen(PORT, ()=>{

    //console.log("Listening on port %d",port);
    // console.log("Listening on port" + chalk.green(" : "+port));
    debug("Listening on port" + chalk.green(" : "+PORT));
    
})