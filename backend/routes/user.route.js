const User = require("../models/user.model");

const router = require("express").Router();

router.post("/", async (req, res) => {
    try {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        console.log(user);

        const userDuplicate1 = await User.findOne({ email: user.email });

        console.log(userDuplicate1);

        if(userDuplicate1) {
            return res.send({
                success: false,
                message: "User with that email already exist!"
            })
        }

        const userDuplicate2 = await User.findOne({ username: user.username });

        if(userDuplicate2) {
            return res.send({
                success: false,
                message: "User with that username already exist!"
            })
        }

        user.save();

        return res.send({
            succes: true
        });
    } catch (e) {
        return res.send({
            "succes": false,
            message: "Error: " + e.message
        })
    }
})

module.exports = router;