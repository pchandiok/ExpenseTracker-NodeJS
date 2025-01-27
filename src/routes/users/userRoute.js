const express = require('express');
const userRoute = express.Router();
const {registerUser, fetchUsersCtrl} = require("../../controllers/users/userController");

userRoute.get("/", fetchUsersCtrl);
userRoute.post("/register", registerUser);

module.exports = {userRoute};