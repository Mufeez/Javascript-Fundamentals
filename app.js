console.log('start');

setTimeout(() => {
    console.log('timer Ended')
}, 5000);

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json)).catch((err)=>{
    console.log(err)
})

console.log('End');