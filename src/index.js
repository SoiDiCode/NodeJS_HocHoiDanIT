// const express = require('express');
import express from 'express';
import configViewEngine from './configs/viewEngine.js';
const app = express();
import initWebRoute from './routes/web.js';
// backup nếu bên trái là undefide thì lấy gtri ben phải
// nếu ko cấu hình bên file .env
const port = process.env.PORT || 3000;


// setup viewEngine
configViewEngine(app);


// init web router
initWebRoute(app);

// app.get("/",(req,res) => {
//    res.render("index.ejs");
// //    res.render(index.html);
// });
// app.get("/infor",(req,res) => {
//    res.send("Hello Infor !!!");
// });

app.listen(port, () => {
   console.log(` App is running on http://localhost:${port}`);
})