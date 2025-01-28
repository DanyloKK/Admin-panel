const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const password = "Kuzka2015";
const uri = `mongodb+srv://domik12560:${password}@cluster0.sju2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });

app.use(cors());
app.get('/form-data', (req, res) => {
    res.send('Hello, world!');
});
app.listen(8080, () => {
    console.log("Server started on port 8080");
});
app.use(express.json());

const formSchema = new mongoose.Schema({
    value: {
        type: [mongoose.Schema.Types.Mixed],
        required: true,
    },
});

const forms = mongoose.model('Form', formSchema);

app.post('/form-data', async (req, res) => {
    try {
        const formValues = req.body;
        const formData = new forms({
            ...formValues,
        })
        await formData.save();
        res.status(201).send('Пользователь успешно добавлен');

    } catch (err) {
        console.log(err);
    }
})

