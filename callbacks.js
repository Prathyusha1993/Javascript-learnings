const posts = [
    {title: 'Post one', body:'this is post one'},
    {title: 'Post two', body:'this is post two'}
];

function getPosts() {
    setTimeout(()=>{
        let output='';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// function createPost(post){  //modified as below to callback function
//     setTimeout(()=>{
//         posts.push(post);
//     }, 2000);
// }

// getPosts(); //we get output as post one , post two

// createPost({title: 'post three', body: 'this is post three'}); 
//here we are trying to push post three and get the output as post one, post two, post three but it won't work*
//because if we see in the code getPosts() happens in 1sec(1000) whereas createPost() is taking 2 sec(2000msec)
//when we run a createPost() DOM was already painted with getPost(), so this is where async programms come which are callbacks

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({title: 'post three', body: 'this is post three'}, getPosts);  //now will gwt the output as postone, post two, post three