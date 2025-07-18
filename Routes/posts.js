import express from 'express';
import fs from 'fs'

const router = express.Router();

let posts = [
    {id:1, title:'fatih'},
        {id:2, title:'fatih2'},
            {id:3, title:'fatih3'},
                {id:4, title:'fatih4'},
 ]

 router.get('/' , (req,res,next)=>{
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit)&& limit>0){
        return res.status(200).json(posts.slice(0,limit));
    }
 res.json(posts);
 })

 router.get('/:id',(req,res , next)=>{
    const id = parseInt(req.params.id);
    const post = posts.find((post)=>post.id===id);
    if(!post){
        const err= new Error(`A post with id ${id} was not found`);
        err.status=404;
       return next(err);
    }
        res.status(200).json(post);
 })


router.post('/', (req, res , next) => {
    if (!req.body || !req.body.title) {
      const err= new Error(`Please enter a title`);
      err.status=400;
       return next(err);
    }
    const newPost = {
        id: posts.length + 1,
        title: req.body.title 
    }
    
    posts.push(newPost);
    res.status(200).json(posts);
});

router.put('/:id', (req, res, next) => {
    const id =  parseInt(req.params.id);
    const post= posts.find((post)=>post.id===id);
    if(!post){ 

      const err= new Error(`A post with id ${id} was not found`);
      err.status=404;
       return next(err);
    }
    post.title=req.body.title;
    res.status(200).json(posts);
})

router.delete('/:id', (req,res, next)=>{
    const id = parseInt(req.params.id);
    const post= posts.find(post=>post.id===id);
    if(!post){

        const err= new Error(`A post with id ${id} was not found`);
        err.status=404;
       return next(err);
    }
    posts=posts.filter(post=>post.id!==id);
    res
    .status(200)
    .json(posts);
    
})
//  router.post('/', (req, res) => {

//     // console.log('DEBUG req.body:', req.body); // Add this line
//     // const newPost = {
//     //     id: posts.length + 1,
//     //     title: req.body.title 
//     // }
//     // if (!newPost.title) {
//     //     return res.status(400).json({ msg: "please enter a title" })
//     // }
//     // posts.push(newPost);
//     // res.status(200).json(posts);
// })
export default router;