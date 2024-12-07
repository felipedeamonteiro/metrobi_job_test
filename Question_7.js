function getMaxValue(carrotTypes, capacity) {
    // Create an array to store the maximum value for each weight
    const dp = new Array(capacity + 1).fill(0);

    // Iterate through each weight capacity from 1 to the given capacity
    for (let currentCapacity = 1; currentCapacity <= capacity; currentCapacity++) {
        for (const carrot of carrotTypes) {
            if (carrot.kg <= currentCapacity) {
                // Calculate the value if this carrot type is included
                dp[currentCapacity] = Math.max(
                    dp[currentCapacity],
                    dp[currentCapacity - carrot.kg] + carrot.price
                );
            }
        }
    }

    // The last entry in the dp array contains the maximum value
    return dp[capacity];
}

// Example usage
const carrotTypes = [
    { kg: 5, price: 100 },
    { kg: 7, price: 150 },
    { kg: 3, price: 70 }
];
const capacity = 36;

console.log(getMaxValue(carrotTypes, capacity)); // Output: 840
