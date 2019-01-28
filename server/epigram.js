const {mongoose}= require(`./mongoose.js`);

const Schema = mongoose.Schema;
let epigramSchema = new Schema(
    {
        text:{
           type:String,
           required:true,
           minlength:1,
           
        },
        author:{
            type:String,
            required:true,
            minlength:1,
            
        }
})



let Epigram = mongoose.model(`Epigram`,epigramSchema);

module.exports={
    Epigram,
}