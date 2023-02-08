window.addEventListener('load', ()=>{
  let Coms = [];

  let users = JSON.parse(localStorage.getItem('students'));
  let user = users.find((el)=>{
    return  el.vaild === true;
  });

  if(user){
    const username = document.querySelector('#user')
    username.innerText =`${user.username}`;
  }    

  let Posts = JSON.parse(localStorage.getItem('posts'));

  for(let i = 0; i < Posts.length; i++){
      let post = Posts[i];
      const posts = document.querySelector('.posts');
      const box = document.createElement('div');
      const newdiv = document.createElement('div');
      const dltBtn = document.createElement('button');
      const comments = document.createElement('div');
      comments.classList.add('coms')
      dltBtn.innerText = 'Delete Post';
      dltBtn.classList.add('delete');
      box.classList.add('post')
      const text = document.createElement('p');
      text.innerText = `${post.titel}`;
      const img = document.createElement('img');
      img.src = `${post.image}`;
      const comment = document.createElement('input');
      comment.classList.add('comment');
      comment.setAttribute('placeholder', 'Write a comment...');
      comment.setAttribute('id', 'comment');
      newdiv.appendChild(text);
      newdiv.appendChild(dltBtn);
      box.appendChild(newdiv);
      box.appendChild(img);
      box.appendChild(comment);
      box.appendChild(comments);
      posts.appendChild(box);   
      comment.addEventListener('keyup',(e)=>{
        if(e.keyCode === 13 && comment.value !== ''){
          const text = document.createElement('input');
          text.classList.add('com');
          text.setAttribute('readonly', 'readonly')
          text.value = e.target.value;
          comment.value = '';
          comments.appendChild(text);
        }
      })
    }
    
    const posts = document.querySelector('.posts');
    posts.addEventListener('click', (e)=>{
      let Posts = JSON.parse(localStorage.getItem('posts'));
      let target = e.target;
      if(target.className === 'delete'){
        let deleteEl = target.parentElement.parentElement;
        let aa = deleteEl.children[0];
        let bb = aa.firstChild;
        let newPosts = Posts.filter(el=>{
          return el.titel !== bb.innerText;
        });
        localStorage.setItem('posts',JSON.stringify(newPosts));
        deleteEl.remove();
      }
    })
})