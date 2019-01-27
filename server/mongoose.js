let mongoose = require(`mongoose`);

mongoose.Promise = global.Promise; 
mongoose.connect(`mongodb://localhost:27017/fraszki`,{useNewUrlParser:true}).then((res)=>{
    console.log("Connected to the server")
},(error)=>{
    console.log("can`t connect to the server")
})


module.exports= {
    mongoose,
}