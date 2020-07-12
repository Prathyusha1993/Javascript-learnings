const promises1 =  Promise.resolve('hello world');
const promises2 = 20;
const promises3 = new Promise((resolve, reject) => 
  setTimeout(resolve, 2000, "good bye")
//   setTimeout(reject, 2000, " bye");
);
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res=>
res.json());

Promise.all([promises1, promises2, promises3,promise4]).then(values=> console.log(values));