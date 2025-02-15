const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/User');

//Register
const registerUser = expressAsyncHandler(
    async (req, res) => {
        const {email, firstName, lastName, password} = req?.body;
    
        //check if user exists
        const userExists = await User.findOne({email: req.body.email});
        if(userExists)
            throw new Error("User already exists");
        try {
            
            const user = await User.create({email, firstName, lastName, password});
            res.status(200).json(user);
        } catch (error) {
            console.log(error);
        }
    }
);

//fetch all users

const fetchUsersCtrl = expressAsyncHandler(async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.json(error);
    }
});

module.exports = {registerUser, fetchUsersCtrl};