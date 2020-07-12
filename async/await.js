const posts = [
    {title: 'Post one', body:'this is post one'},
    {title: 'Post two', body:'this is post two'}
];

function getPosts() {
    setTimeout(()=>{
        let output='';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
            output += `<li>${post.body}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

async function init(){
    await createPost({title: 'post three', body:'this is post three'});

    getPosts();
}

init();

//async/await with fetch
async function fetchUsers(){
    const res = fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json()
    console.log(data);
}

fetchUsers();

async function fetchTodo(){
    const res = fetch("https://jsonplaceholder.typicode.com/todos");
    const data =await res.json();
    console.log(data);
}

fetchTodo();