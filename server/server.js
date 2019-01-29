const express = require(`express`);
const bodyParser = require(`body-parser`);
const ObjectID = require(`mongodb`).ObjectID;

//const {mongoose} = require(`./mongoose.js`);
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

app.get(`/epigrams`,(req, res)=>{
    Epigram.find().then((epigrams)=>{
        res.send({epigrams});
    }, (e)=>{
        res.status(400).send(e);
    })
});

app.get(`/epigrams/:id`,(req, res)=>{
    let id = req.params.id;
     if(!ObjectID.isValid(id))
     {
        return res.status(400).send({message:"id is not valid"});
     }
    Epigram.findById(id).then((epigram)=>{
    if(epigram){
    res.send({epigram});
    } else {
        res.status(404).send({message:"Document with that id was not found"});
    }
    })
})

app.listen(`3000`);


