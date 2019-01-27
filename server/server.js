const express = require(`express`)


const {mongoose} = require(`./mongoose.js`);
const epigram = require(`./epigram.js`)

const app = express();

app.get(`/`, (req, res)=>{
    res.send("hello world");
})

app.listen(`3000`);


