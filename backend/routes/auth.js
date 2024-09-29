const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const jwt_secret = "hello "
const fetchUser = require("../middleware/fetchUser")

router.post('/createuser', [
    body('username', 'enter a valid name').isLength({ min: 3 }),
    body('role', 'enter a role').exists(),
    body('password', 'please ente a password of 5 characterss').isLength({ min: 5 }),


], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {


        let user = await User.findOne({ username: req.body.username })
        if (user) {
            return res.status(400).json({ errors: "Sorry a user with this email already exits" })
        }
        const salt = await bcrypt.genSalt(10);
        secPass = await bcrypt.hash(req.body.password, salt)
        user = await User.create({
            username: req.body.username,
            password: secPass,
            role: req.body.role
        })
        const data = {
            user: {
                id: user.id
            }
        }

        const auth_token = jwt.sign(data, jwt_secret);

        res.json(auth_token)
    } catch (error) {
        res.status(500).send("Sme error occured")
    }
})

router.post('/login', [
    body('username', 'enter a valid username').exists(),
    body('password', 'password cannot be blank').exists(),

], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body
    try {
        let user = await User.findOne({ username })
        if (!user) {
            return res.status(400).json({ error: "please try to login with correct credentials" })
        }
        const comparepassword = await bcrypt.compare(password, user.password);
        if (!comparepassword) {
            return res.status(400).json({ error: "please try to login with correct credentials" })

        }

        const data = {
            user: {
                id: user.id
            }
        }
        const auth_token = jwt.sign(data, jwt_secret);
        res.json(auth_token)
    } catch (error) {
        res.status(500).send("internal server error");
    }
})

router.get('/getuser', fetchUser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select('-password')
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal Server error")
    }
})

module.exports = router