
document.querySelector('#btn').addEventListener('click',function clickHandler(){
  console.log('button Clicked');
})



setTimeout(function(){
    console.log('data receievd from server')
    console.log('display data');
},5000)

setInterval(function(){
  console.log('10 seconds')
},10000)

function requestData(render){
  console.log("request data")
  render();
}

function renderElements(){
    console.log('dispay Elements')
}

requestData(renderElements);