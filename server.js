const express= require('express');
const path = require('path');
const app = express();

let posts = [
    {id:1, title:'fatih'},
        {id:2, title:'fatih2'},
            {id:3, title:'fatih3'},
                {id:4, title:'fatih4'},
 ]

 app.get('/api/posts' , (req,res)=>{
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit)&& limit>0){
        res.json(posts.slice(0,limit));
    }else{
 res.json(posts);
    }
   
 })

 app.get('/api/posts/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    res.json(posts.filter((post)=>post.id===id))
 })

//app.use(express.static(path.join(__dirname,'public')))

// app.get('/',(req,res)=>{ 
//     res.sendFile(path.join(__dirname , 'public' , 'index.html'))
// })
// app.get('/about' , (req,res)=>{
    
//     res.sendFile(path.join(__dirname , 'public' , 'about.html'))
// })
app.listen(5000 , ()=>{console.log('server listening on port 5000')});
