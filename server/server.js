const express = require(`express`);
const bodyParser = require(`body-parser`);

const {mongoose} = require(`./mongoose.js`);
const {Epigram} = require(`./epigram.js`)

const app = express();

app.use(bodyParser.json());

app.get(`/`, (req, res)=>{
    res.send("Welcome to my epigram app. Read the documentation to see basic requests you can make");
})

app.post(`/epigrams`, (req, res)=>{
    console.log(req.body);
    epigram = new Epigram({ text: req.body.text,
    author: req.body.author });

    epigram.save().then(doc=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    })
});

app.listen(`3000`);


