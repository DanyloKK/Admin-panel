const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const password = "Kuzka2015";
const mongooseSequence = require('mongoose-sequence')(mongoose);

const uri = `mongodb+srv://domik12560:${password}@cluster0.sju2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });

app.use(express.json());
app.use(cors());



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
    }
});


formSchema.plugin(mongooseSequence, { inc_field: 'id' });

const FormData = mongoose.model("FormData", formSchema);

app.post('/form-data', async (req, res) => {
    try {
        const formData = req.body;
        console.log('Received values:', req.body);

        const formInfo = new FormData({
            ...formData,
        });

        await formInfo.save();
        res.status(201).json(formInfo);
    } catch (err) {
        console.log(err);
        res.status(500).send('Произошла ошибка при сохранении данных');
    }
});

app.get('/form-data', async (req, res) => {
    try {
        const form = await FormData.find();
        console.log(form);
        return res.status(200).json(form);
    } catch (err) {
        console.log(err);
        return res.status(500).send("Error occured");
    }
});
app.delete("/form-data/:id",async(req,res)=>{
    const {id} = req.params;
    try{
        const formDelete = await FormData.deleteOne({id: id})
        res.status(200).json(formDelete);
    }catch (err) {
        console.log(err);
        return res.status(500).send("Error occured");
    }
})
app.put("/form-data/:id", async (req, res) => {
    const { id } = req.params;
    console.log(req.body);
    console.log(id);
    try {
        const updatedForm = await FormData.findOneAndUpdate({id}, req.body, { new: true });
        if (!updatedForm) {
            return res.status(404).json({ message: "Form not found" });
        }
        res.status(200).json(updatedForm);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error occured" });
    }
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});
