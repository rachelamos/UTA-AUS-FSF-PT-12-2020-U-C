const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it("should return a new reversed version of string", () => {
      const obj = new Algo();

      expect("string" in obj).toEqual(true);
    });
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it("should take a string as an argument and return the boolean 'true' if the provided string is a palindrome", () => {
      const obj = new Algo.isPalindrome();

      expect('string' in obj).isPalindrome(true);
    })
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
  });
});
