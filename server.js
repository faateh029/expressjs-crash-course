const express= require('express');
const path = require('path');
const posts=require('./Routes/posts.js')
const port=process.env.PORT||5000
const app = express();


app.use('/api/posts' , posts);
//app.use(express.static(path.join(__dirname,'public')))

// app.get('/',(req,res)=>{ 
//     res.sendFile(path.join(__dirname , 'public' , 'index.html'))
// })
// app.get('/about' , (req,res)=>{
    
//     res.sendFile(path.join(__dirname , 'public' , 'about.html'))
// })
app.listen(port , ()=>{console.log('server listening on port 5000')});
