const express=require('express')
const { postModel } = require('../model/post.model')

const postRouter=express.Router()


postRouter.get('/',async(req,res)=>{
   
    try {
        const data=await postModel.find();
        res.send({msg:"hello from homepage, please use your NAME, EMAIL & AGE for POST request",data:data})
    } catch (error) {
        res.json({error:error.message})
    }
})

postRouter.post('/post',async(req,res)=>{
    try {
       
      const email=req.body.email
      console.log(email)
      const data=await postModel.findOne({email})
    if(data && data.email==email){
        res.json({msg:"Email already exist"})
    } else{
       const post=new postModel(req.body)
      await post.save();
     
        res.json({msg:"New post created",post:post}) 
    }   
    } catch (error) {
        res.json({error:error.message})
    }
})


postRouter.delete('/delete/:id',async(req,res)=>{
  
    const id=req.params.id;
    console.log(id)
      try {
   const post= await postModel.findOne({_id:id})
   console.log(post)
if(post){
    await postModel.findByIdAndDelete({_id:id})
    res.json({msg:`${post.email} is deleted`})
}else{
    res.json({msg:"try again"})
}
    } catch (error) {
        res.json({error:error.message})
    }
})

module.exports={
    postRouter
}