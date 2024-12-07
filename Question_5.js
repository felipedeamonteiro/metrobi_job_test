/**
 * Solution to Two Eggs and 100 Floors Problem
 * 
 * Problem: Find highest floor an egg can be dropped from without breaking using 2 eggs,
 * minimizing worst-case number of drops.
 * 
 * Strategy:
 * 1. First egg: Use decreasing step sizes to minimize worst-case drops
 * 2. Second egg: Linear search in the gap where first egg broke
 * 
 * Time Complexity: O(√n) where n is number of floors
 * - First egg uses optimal step sizes calculated using k(k+1)/2 ≥ n formula
 * - Second egg uses at most k-1 drops in the gap
 * - Total drops in worst case: k drops (where k is approximately √(2n))
 */
function findHighestSafeFloor(totalFloors) {
    // Input validation
    if (typeof totalFloors !== 'number' || totalFloors <= 0) {
        throw new Error('Total floors must be a positive number');
    }

    // Calculate optimal step size
    // Using formula: k(k+1)/2 ≥ n where n is total floors
    let optimalStepSize = 0;
    while ((optimalStepSize * (optimalStepSize + 1)) / 2 < totalFloors) {
        optimalStepSize++;
    }

    let currentFloor = 0;
    let previousFloor = 0;

    // Phase 1: Use first egg with decreasing intervals
    for (let step = optimalStepSize; step > 0; step--) {
        previousFloor = currentFloor;
        currentFloor += step;
        
        // Ensure we don't exceed building height
        if (currentFloor > totalFloors) {
            currentFloor = totalFloors;
        }

        console.log(`Drop #1: First egg from floor ${currentFloor}`);
        const eggBreaks = simulateEggDrop(currentFloor);

        if (eggBreaks) {
            console.log(`First egg broke at floor ${currentFloor}`);
            break;
        }
    }

    // Phase 2: Use second egg for linear search in the gap
    const searchStart = previousFloor + 1;
    const searchEnd = currentFloor - 1;
    
    console.log(`Drop #2: Testing floors ${searchStart} to ${searchEnd} with second egg`);
    
    for (let floor = searchStart; floor <= searchEnd; floor++) {
        console.log(`Drop second egg from floor ${floor}`);
        const eggBreaks = simulateEggDrop(floor);

        if (eggBreaks) {
            console.log(`Second egg broke at floor ${floor}`);
            return floor - 1; // Highest safe floor is one below breaking point
        }
    }

    return currentFloor - 1; // If we reach here, the highest floor is safe
}

// Test simulation function (replace with actual testing in real scenario)
function simulateEggDrop(floor) {
    const highestSafeFloor = 88; // Example threshold
    return floor > highestSafeFloor;
}

// Test cases
console.log("Test Case 1 - 100 floors:");
console.log("Highest safe floor:", findHighestSafeFloor(100));
console.log("\nTest Case 2 - 58 floors:");
console.log("Highest safe floor:", findHighestSafeFloor(58));
