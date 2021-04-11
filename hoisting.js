//with hoisting
// number1 is stored as undefined during memory creation Phase
//typename defination is stored during memeory creation phase
console.log(number1);
typeName();
console.log(typeName);


var number1=7

function typeName() {

    console.log('Namaste Javascript')
}

//without hoisting
console.log(number1);
typeName();
console.log(typeName);

