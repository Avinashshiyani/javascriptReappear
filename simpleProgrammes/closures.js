function outer(){
    let message = "Hello from Outer";

    function inner(){
        console.log(message)
    }

    return inner()
}

outer()