// find greatest from array

let arr = [1, 3, 4, 5, 2];

let largestNum = [];

for(let i = 0 ; i<=arr.length ; i++){
    if(arr[i] >= largestNum){
        largestNum = arr[i]
    }
}

console.log(largestNum);