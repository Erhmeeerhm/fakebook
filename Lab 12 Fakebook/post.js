class post {
    constructor(postId, userId, title) {
        this.postId = postId,
            this.userId = userId,
            this.titel = title
    }
}
const title = document.querySelector('#title');
const Post = document.querySelector('#btn');

let posts = []
Post.addEventListener('click', function saveLocalStorage() {
    let users = JSON.parse(localStorage.getItem('students'));
    user = users.find((element) => {
        return element.vaild == true
    });


    let newPost = new post(1, user.id, title.value)
    posts.push(newPost);
    if (localStorage.getItem('posts') == null) {
        localStorage.setItem('posts', JSON.stringify(posts))
    } else {
        let newArr = JSON.parse(localStorage.getItem('posts'))
        newArr.push(newPost)
        localStorage.setItem('posts', JSON.stringify(newArr))
    }


})