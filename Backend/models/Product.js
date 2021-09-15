const mongoose=require('mongoose')

const  Schema=mongoose.Schema

const productSchema=new Schema({
    Article :{
        type:String,
        required:true
    },
    Image :{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    Category :{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Product',productSchema)