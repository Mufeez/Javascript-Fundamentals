function showBalance() {
    var balance = 1;
    setTimeout(() => {
        console.log(balance)
    }, 10000)
    console.log("Your Balance is")
}

function increaseBalance() {

    for (var i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000)

    }
    console.log("Your Balance is")
}

function increaseBalance2() {

    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000)

    }
    console.log("Your Balance is")
}

function increaseBalance3() {

    for (var i = 1; i <= 5; i++) {
        function close(a) {
            setTimeout(() => {
                console.log(a)
            }, a * 1000)
        }
        close(i)
    }
    console.log("Your Balance is")
}


//showBalance();
//increaseBalance();
//increaseBalance2();
increaseBalance3();
