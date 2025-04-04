function isPalindrome(word) {
  // Reverse the word and compare it to the original
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

/* 
  Pseudocode:
  1. Split the input string into an array of characters.
  2. Reverse the array.
  3. Join the reversed array back into a string.
  4. Compare the reversed string with the original string.
  5. Return true if they are the same, otherwise return false.
*/

/*
  Explanation:
  A palindrome is a word that reads the same backward as forward. 
  By reversing the input string and comparing it to the original, 
  we can determine if the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
