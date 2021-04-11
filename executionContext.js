var number1=2;

//functions are defined for reusabilty
//define once and use it a lot of times
//inputs we need for a function are called as parameters
//hence num becomes parameter
//here we are defining function
function square(num) {
    var answer =num *num;
    return answer;
}

//what we pass to function is called as argument
//hence number1 and 4 becomes argument
//here we are invoking the function
var square2=square(number1);
var square4=square(square2);