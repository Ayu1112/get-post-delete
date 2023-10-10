const mongoose=require('mongoose')

const postSchema=mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    userId:Number
},
{
    versionKey:false
})

const postModel=mongoose.model('post',postSchema)


module.exports={
    postModel
}