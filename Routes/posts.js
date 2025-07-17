const express= require('express');
const router = express.Router();

let posts = [
    {id:1, title:'fatih'},
        {id:2, title:'fatih2'},
            {id:3, title:'fatih3'},
                {id:4, title:'fatih4'},
 ]

 router.get('/' , (req,res)=>{
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit)&& limit>0){
        return res.status(200).json(posts.slice(0,limit));
    }
 res.json(posts);
    
   
 })

 router.get('/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const post = posts.find((post)=>post.id===id);
    if(!post){
       return res.status(404).json({message:`A post with id:${id} was not found`})
    }
        res.status(200).json(post);
 })

 module.exports =router ; 