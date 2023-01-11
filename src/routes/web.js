// Nơi chứa các routes
import express, { Router } from "express";
import homecontroller from "../controller/HomeController.js";

let router = express.Router();


const initWebRoute = (app) => {
    router.get("/", homecontroller.index);
    router.get("/users/detail/:id", homecontroller.detail);
    router.get("/users/update/:id", homecontroller.update);
    router.post("/create-new-user", homecontroller.create);
    router.post("/users/delete", homecontroller.delete);
    router.post("/update-user", homecontroller.postUpdate);
    // Path là tiền tố thêm trước route
    //VD : nếu "/" => /infor
    // nếu "/abc" => /abc/infor
    return app.use("/", router)
}
export default initWebRoute;