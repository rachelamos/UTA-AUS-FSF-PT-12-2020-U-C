const Child = require("../child");

describe("Child", () => {
  // TODO: Add a comment describing the purpose of the following test suite
  // checking that an object is being created using the inputted arguments
  describe("Initialization", () => {
    it("should create an object with a name and age if provided valid arguments", () => {
      const child = new Child("Sarah", 3);

      // TODO: Add a comment describing the purpose of the following statements
      // running the test to see whether the object created matches the inputted arguments
      expect(child.name).toEqual("Sarah");
      expect(child.age).toEqual(3);
    });

    it("should throw an error if provided no arguments", () => {
      // TODO: Add a comment describing the purpose of the following expression
      // creating a callback for a instance of the function Child
      const cb = () => new Child();

      // TODO: Add a comment describing the purpose of the following statement
      // running the test to see if error throws when no parameters are inputed
      expect(cb).toThrow();
    });

    it("should throw an error if not provided an age", () => {
      const cb = () => new Child("Sarah");

      // TODO: Add a comment describing the purpose of the following declaration
      // throws another error if the age is illogical ie negative
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      // TODO: Add a comment describing the purpose of the following statement
      // excuting the test to throw the error
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Child(3, 2);
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'age' is not a number", () => {
      const cb = () => new Child("Sarah", "2");
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'age' is less than 0", () => {
      const cb = () => new Child("Sarah", -1);
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      expect(cb).toThrowError(err);
    });
  });
});
