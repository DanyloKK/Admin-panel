const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const password = "Kuzka2015";
const JWT_SECRET = "secretKey";

const uri = `mongodb+srv://domik12560:${password}@cluster0.sju2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
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
g
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

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});
app.get('/register', (req, res) => {
    res.status(200).json({ message: 'Страница регистрации. Используйте POST для регистрации' });
});
const UserData = mongoose.model("UserData", UserSchema);
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    if (!username || !password) {
        return res.status(400).json({ message: 'Заполните все поля' });
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


        res.status(201).json({ message: 'Пользователь успешно зарегистрирован' });
    } catch (error) {
        console.error('Ошибка при регистрации:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
});
/*
app.post('/login', async (req, res) => {
    const { login, password } = req.body;

    try {
        const user = await UserData.findOne({ login });
        if (!user) {
            return res.status(401).json({ message: 'Неверный логин или пароль' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Неверный логин или пароль' });
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: '✅ Успешный вход', token });
    } catch (error) {
        console.error('Ошибка при логине:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
});

 */
