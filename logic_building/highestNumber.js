let highestNumber = (number = [1, 2, 4, 8, 88, 10]) => {
    let high = number[0]; // Initialize with the first element of the array
    for (let i = 1; i < number.length; i++) { // Start from the second element
        if (number[i] > high) { // Compare current number with 'high'
            high = number[i]; // Update 'high' if the current number is larger
        }
    }
    console.log(high); // Output the largest number
};

highestNumber([20,88,99]); // Output: 88
