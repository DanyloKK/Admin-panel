const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const password = "Kuzka2015";
const uri = `mongodb+srv://domik12560:${password}@cluster0.sju2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });

app.use(express.json());
app.use(cors());
const upload = multer({ dest: 'uploads/' })

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const formData = mongoose.model("FormData", formSchema);


app.get('/form-data', async (req, res) => {
    try {
        const form = await formData.find();
        console.log(form);
        return res.status(200).json(form);
    } catch (err) {
        console.log(err);
        return res.status(500).send("Error occured");
    }
});

app.post('/form-data', upload.single('image'), async (req, res) => {
    try {
        const formValues = req.body;
        console.log(formValues);
        const formInfo = new formData({
            ...formValues,
            image: `${upload/req.file.filename}`,
        });
        await formInfo.save();
        res.status(201).json(formInfo);
    } catch (err) {
        console.log(err);
        res.status(500).send('Произошла ошибка при сохранении данных');
    }
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});