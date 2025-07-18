const output = document.querySelector('.output');
const button = document.querySelector('.get-posts-butt');
const form = document.querySelector('.add-posts');

async function showPosts(){
    try{
    const res= await fetch('http://localhost:5000/api/posts');
    if(!res.ok){
        throw Error('failed to fetch from API')
    }
    const posts = await res.json();
    output.innerHTML='';
    posts.forEach((post=>{
         const postEl = document.createElement('div');
         postEl.textContent=post.title;
         output.appendChild(postEl);
    }))

}catch(err){
    console.log('error fetching API')
}
}

async function addPost(e){
    e.preventDefault();
    const formData = new FormData(this);
    const title = formData.get('title');
    try {
        const res = await fetch('http://localhost:5000/api/posts' , {method:'POST' , 
                  headers: {
                    'Content-Type' : 'application/json'
                  },
                  body: JSON.stringify({title})
        })
        if(!res.ok){
            throw new Error ('Failed to add post')
        }

        const newPost = await res.json();
        const postEl = document.createElement('div');
        postEl.textContent=newPost.title;
        output.appendChild(postEl);
        showPosts();  
    } catch (error) {
        console.log('Error: Failed to add post');
    }
}
button.addEventListener('click' , showPosts);
form.addEventListener('submit' , addPost)
;
