// Nơi chứa các routes
import express, { Router } from "express";
import API from "../controller/APIController.js";
let router = express.Router();


const initApiRouter = (app) => {
    // method GET -> readDATA
    router.get("/users", API.getAllUsers);
    // method POST -> create user
    router.post("/create-user", API.createUser);
    // method PUT -> update user
    router.put("/update-user", API.updateUser);
    // method delete -> delete user
    router.delete("/delete-user/:id", API.deleteUser);

    return app.use("/api/v1", router);
}
export default initApiRouter;