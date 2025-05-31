// Imagine you have a staircase with 10 steps. You can climb either 1 step or 2 steps at a time.
// How many different ways can you reach the top?
// Write a function in JavaScript that calculates the total number of ways to reach the top step.

const countStairs = (stairs = 10)=>{

    let oneStep = 0 ;
    let twoStep = 0 ;
    for(let i = 1 ; i <= stairs ; i++ ){
        oneStep = oneStep + 1 ;
        twoStep = twoStep + 2 ;
        console.log(oneStep , twoStep);
    }
}

countStairs();