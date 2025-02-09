const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const password = "Kuzka2015";
require("dotenv").config()

const uri = `mongodb+srv://domik12560:${password}@cluster0.sju2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });
app.listen(5000, () => {
    console.log("Server started on port 5000");

});
app.use(express.json());
app.use(cors());
const JWT_SECRET = process.env.JWT_SECRET;
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});


const UserData = mongoose.model("UserData", UserSchema);
app.get('/login', async (req, res) => {
    try {
        const users = await UserData.find({}); // Скрываем пароли
        res.json(users);
    } catch (error) {
        console.error('Ошибка при получении пользователей:', error);
        res.status(500).json({message: 'Ошибка сервера'});
    }
});
/*
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    if (!username || !password) {
        return res.status(400).json({ message: 'Fill all the fields' });
    }

    try {

        const existingUser = await UserData.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Пользователь с таким логином уже существует' });
        }


        const hashedPassword = await bcrypt.hash(password, 10);


        const newUser = new UserData({
            username,
            password: hashedPassword,
        });


        await newUser.save();


        res.status(201).json(newUser);
    } catch (error) {
        console.error('Registration mistake:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


 */


app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    try {
        const user = await UserData.findOne({username});
        console.log(user)
        if (!user) {
            return res.status(401).json({message: 'Wrong login or password'});
        }
        console.log(JWT_SECRET)

        const isPasswordValid = await bcrypt.compare(password.trim(), user.password);
        console.log(isPasswordValid)
        if (!isPasswordValid) {
            return res.status(401).json({message: 'Wrong  password'});
        }

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.json({token,user});
    } catch (error) {
        console.error('Ошибка при логине:', error);
        res.status(500).json({message: 'Server error'});
    }
});





