
let posts = [
    {id:1, title:'fatih'},
        {id:2, title:'fatih2'},
            {id:3, title:'fatih3'},
                {id:4, title:'fatih4'},
 ]

// @DESC-----> request : GET , URL: /api/posts
// Gets all posts from the posts array
export const getPosts = (req,res,next)=>{
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit)&& limit>0){
        return res.status(200).json(posts.slice(0,limit));
    }
 res.json(posts);
 }

// @DESC -----> request : GET , URL: /api/posts/:id
// Gets a post by it's ID . 
 export const getPostById = (req,res , next)=>{
    const id = parseInt(req.params.id);
    const post = posts.find((post)=>post.id===id);
    if(!post){
        const err= new Error(`A post with id ${id} was not found`);
        err.status=404;
       return next(err);
    }
        res.status(200).json(post);
 }

// @DESC ------> request : PUT , URL : /api/posts/:id
// Updates a post having a specific ID.
 export const updatePost = (req, res, next) => {
    const id =  parseInt(req.params.id);
    const post= posts.find((post)=>post.id===id);
    if(!post){ 

      const err= new Error(`A post with id ${id} was not found`);
      err.status=404;
       return next(err);
    }
    post.title=req.body.title;
    res.status(200).json(posts);
}

// @DESC ------> request : POST , URL : /api/posts/:id
// Creates a new post at the end.
export const createPost = (req, res , next) => {
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
}

// @DESC ------> request : DELETE , URL : /api/posts/:id
// Deletes a post having a specific ID.
export const deletePost = (req,res, next)=>{
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
}