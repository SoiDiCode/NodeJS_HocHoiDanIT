// Nơi chứa các routes
import express, { Router } from "express";
import homecontroller from "../controller/HomeController.js";

let router = express.Router();


const initWebRoute = (app) => {
    router.get("/", homecontroller.index);
    router.get("/users/:path/:slug", homecontroller.chucnang);

    // Path là tiền tố thêm trước route
    //VD : nếu "/" => /infor
    // nếu "/abc" => /abc/infor
    return app.use("/", router)
}
export default initWebRoute;