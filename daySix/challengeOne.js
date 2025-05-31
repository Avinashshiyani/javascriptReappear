// Challenge 1:
// Write a function isEven(number) that checks if a number is even.
let checkEven = (number = 0)=>{
    if(number % 2 === 0){
        return console.log(`${number} is a even number`)
    }
    else{
        console.log(`${number} is an odd number`)
    }
}

checkEven(30);