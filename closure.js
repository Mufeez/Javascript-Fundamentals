function manageAccount(){

    var balance=900

    function showBalance(){
        console.log(balance)
    }

    showBalance();
}

function manageAccount2(){

    var balance=800

    function showBalance(){
        console.log(balance)
    }

   return showBalance;
}

function otherFunction(){
    console.log(balance);
}

manageAccount();
var sb = manageAccount2();
sb();
otherFunction();