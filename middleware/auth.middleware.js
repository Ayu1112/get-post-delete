const jwt=require("jsonwebtoken");
const { postModel } = require("../model/post.model");

require("dotenv").config();

const auth =async(req,res,next)=>{
    
        try {
            const dlength=await postModel.find().length
            req.body.userId=dlength+1
              
                next()
            
        } catch (err) {
            res.json({error:err.message})
        }
    }

module.exports={
    auth
}