import  express  from "express";
const configViewEngine = (app) =>{
   app.set("view engine","ejs");
   app.set("views","./src/views");
   // cấu hình file động
   app.use(express.static('./src/public'));
}

export default configViewEngine;