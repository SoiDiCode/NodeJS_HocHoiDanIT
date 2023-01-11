// const express = require('express');
import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import initWebRoute from './routes/web.js';
import initAPIRoute from "./routes/api.js";
// import connection from './configs/ConnectDB.js';
// backup nếu bên trái là undefide thì lấy gtri ben phải
// nếu ko cấu hình bên file .env
const port = process.env.PORT || 3000;
const app = express();
// lấy data phía clint lên server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup viewEngine
configViewEngine(app);


// init web router
initWebRoute(app);
initAPIRoute(app);

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