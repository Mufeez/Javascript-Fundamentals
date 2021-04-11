console.log('start');

setTimeout(() => {
    console.log('timer Ended')
}, 5000);

fetch('https://reqres.in/#support-heading').then(()=>{
    console.log('resolved');
}).catch((err)=>{
    console.log('rejected')
})

console.log('End');