const {mongoose}= require(`./mongoose.js`);

const Schema = mongoose.Schema;
let epigramSchema = new Schema(
    {
        body:{
           type:String,
           require:true,
           minlength:1,
           
        },
        author:{
            type:String,
            require:true,
            minlength:1,
            
        }
})



let epigram = mongoose.model(`epigram`,epigramSchema);