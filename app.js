// run main app
//โค้ดพื้นฐาน
const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();   
const port = 3000;   // app run port ? ห้ามทับกับ port อื่นที่ใช้งานอยู่ในเครื่อง

// เรียกใช้งาน morgan
app.use(morgan('combined'));

// จัดการกับ Request ต่างๆ ที่เข้ามา เมื่อเข้ามาจะส่ง/แสดงอะไรให้เขาดู
app.get("/", (req,res) =>{

    res.send('Hello borntoDev Hi!!');

})

// ให้ app รอฟังที่ port และตามด้วยที่จะอยากให้เขากระทำ
app.listen(port, ()=>{

    //console.log("Listening on port %d",port);
    // console.log("Listening on port" + chalk.green(" : "+port));
    debug("Listening on port" + chalk.green(" : "+port));
    
})