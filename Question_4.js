function areBracketsBalanced(input) {
  // Define matching pairs for brackets
  const matchingBrackets = {
      '}': '{',
      ')': '(',
      ']': '['
  };

  // Initialize an empty stack
  const stack = [];

  // Iterate through each character in the input string
  for (const char of input) {
      // If the character is an opening bracket, push it onto the stack
      if (char === '{' || char === '(' || char === '[') {
          stack.push(char);
      } 
      // If the character is a closing bracket
      else if (char === '}' || char === ')' || char === ']') {
          // Pop the top element from the stack and check if it matches
          if (stack.pop() !== matchingBrackets[char]) {
              return false; // Mismatched or unbalanced brackets
          }
      }
  }

  // If the stack is empty, all brackets were matched properly
  return stack.length === 0;
}

// Test cases
console.log(areBracketsBalanced("{[]}")); // true
console.log(areBracketsBalanced("{(])}")); // false
console.log(areBracketsBalanced("{([)]}")); // false
console.log(areBracketsBalanced("{[()]}")); // true