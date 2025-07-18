import express from 'express'
import path from'path';
import posts from './Routes/posts.js'
const port=process.env.PORT||5000
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use('/api/posts' , posts);
app.listen(port , ()=>{console.log('server listening on port 5000')});






//app.use(express.static(path.join(__dirname,'public')))

// app.get('/',(req,res)=>{ 
//     res.sendFile(path.join(__dirname , 'public' , 'index.html'))
// })
// app.get('/about' , (req,res)=>{
    
//     res.sendFile(path.join(__dirname , 'public' , 'about.html'))
// })
