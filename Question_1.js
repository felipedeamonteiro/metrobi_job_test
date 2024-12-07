function findDuplicates(arr) {
  // Use a Map to track item frequencies
  const frequencyMap = new Map();
  
  // Count occurrences of each item
  arr.forEach(item => {
    frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
  });
  
  // Filter and return items with count > 1
  return Array.from(frequencyMap)
    .filter(([item, count]) => count > 1)
    .map(([item]) => item);
}

// Example usage:
const duplicates = findDuplicates([1, 2, 3, 4, 2, 5, 6, 3]);
console.log(duplicates); // Output: [2, 3]

// String array
console.log(findDuplicates(['apple', 'banana', 'cherry', 'apple', 'date'])); 
// Output: ['apple']

// Mixed type array
console.log(findDuplicates([1, 'a', 2, 'a', 3, 1])); 
// Output: ['a', 1]