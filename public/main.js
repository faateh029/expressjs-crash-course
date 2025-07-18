const output = document.querySelector('.output');
const button = document.querySelector('.get-posts-butt');

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


button.addEventListener('click' , showPosts);