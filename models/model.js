const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,

    },
    actors:{
        type:String,required:true
    },
    producer:{
        type:String,
        required:true
    },
    year:{type:String,
    required:true},
    rating:{
        type:String,
        
    }
})

module.exports=mongoose.model("Imdb",userSchema)