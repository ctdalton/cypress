describe("fsCalc",  () => {
  beforeEach(() => {
    // Navigate to https://fs-calc.herokuapp.com
    // Click the Start New Calculation button
  });
  it("should have the correct title (Food Storage Calculator)",  () => {

  }); 
  it("should go to the correct URL (/basicCalc)",  () => {

  });
  describe("Family Information", () => {
    it("should start on the Family Information page", () => {
      // Check that the correct input elements are present

    });
    it("should disable the Continue button by default",  () => {
      // Check the disabled attribute on the continue button

    });
    it("should enable the Continue button when all Family Information fields are valid",  () => {
      // Fill out all 4 form fields with valid entries, then check the disabled attribute on the continue button

    });
    it("should show an error when Number of Adults is less than 1", () => {
      /*
        Enter a number less than 1 into the adult input, 
        Blur to run the forms validation, 
        Then check that the error message is present.
      */

    });
    it("should show an error when Adult Calories per day is less than 1", () => {

    });
    it("should clear all errors when all inputs are valid", () => {
      /*
        For all 4 Fields:
          Enter an invalid value
          Blur
          clear the input in the field
          Enter a valid value

        Then check that no error message is present.

        Note: Try to make use of chaining here to make your code cleaner
      */

    });
    it("should continue to the Calorie Breakdown page when the form is valid and the Continue button is clicked", () => {
     /*
      Enter valid values in all 4 form fields
      Click the Continue button
      Check that the correct input elements are present
     */    

    });
  });
  describe('Calorie Breakdown', () => {
    beforeEach(() => {
      // Go to the Calorie Breakdown page by entering valid values in the Family Information form, and clicking Continue
      
    });
    it('should have a total of 100%', () => {
      // Check that the total in the header is 100%

    });
    it('should have default values of 64, 12, 9, 5, and 10 respectively', () => {
      // Check that the inputs have the correct values
     
    });
    it('should remain at a total of 100% when any value is adjusted', () => {
      /*
        Enter a different value in any input
        Blur
        Check that the total in the header is still 100%
        Do this multiple times with different inputs/values

        Note that as you explicitly answer each question, they system will no longer auto adjust that question. 
        So if you answer more than one question you will need to make sure that all your answers total less than 100% for this test to pass
        If you answer all 5 questions you will need to make sure that your answers total exactly 100%
        We would probably want to write another test that tests the functionallity for numbers that total up to a number greater than 100%
      */
     
    });
    it('should show the original default when any value is adjusted', () => {
      /* 
        Enter a value in any input
        Blur
        Check that the original default element is present to the right of that input and that it has the correct value
      */

    });
  });
});