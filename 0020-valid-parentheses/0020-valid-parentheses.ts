const matchingBrackets = new Map<string, string>([
  ["(", ")"],
  ["{", "}"],
  ["[", "]"]
]);

function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const symbol = s[i];

    if (matchingBrackets.has(symbol)) {
      stack.push(matchingBrackets.get(symbol)!);
    } else {
      if (!stack.length || symbol !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Testing the function
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("([)]"));   // Expected: false
console.log(isValid("(]"));     // Expected: false
console.log(isValid("{[]}"));   // Expected: true
