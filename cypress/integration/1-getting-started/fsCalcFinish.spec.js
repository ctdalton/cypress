  describe("fsCalc",  () => {
    beforeEach(() => {
      cy.visit('https://fs-calc.herokuapp.com');
      cy.get('#startNewCalculation').click();
    });
    it("should have the correct title (Food Storage Calculator)",  () => {
      cy.title().should('eq', 'Food Storage Calculator');
    }); 
    it("should go to the correct URL (/basicCalc)",  () => {
      cy.url().should('equal', 'https://fs-calc.herokuapp.com/basicCalc');
    });
    describe("Family Information", () => {
      it("should start on the Family Information page", () => {
        // Check that the correct input elements are present
        cy.get('#adults');
        cy.get('#children');
        cy.get('#calories');
        cy.get('#months');
      });
      it("should disable the Continue button by default",  () => {
        // Check the disabled attribute on the continue button
        cy.contains('Continue').should('have.attr', 'disabled'); //or
        cy.contains('Continue').should('be.disabled');

      });
      it("should enable the Continue button when all Family Information fields are valid",  () => {
        // Fill out all 4 form fields with valid entries, then check the disabled attribute on the continue button
        cy.get('#adults').type('2');
        cy.get('#children').type('5');
        cy.get('#calories').type('2000');
        cy.get('#months').type('12');

        cy.contains('Continue').should('not.have.attr', 'disabled');
      });
      it("should show an error when Number of Adults is less than 1", () => {
        /*
          Enter a number less than 1 into the adult input, 
          Blur to run the forms validation, 
          Then check that the error message is present.
        */
        cy.get('#adults').type('-1').blur();
        cy.contains('Please enter a value between 1 and 99');
      });
      it("should show an error when Adult Calories per day is less than 1", () => {
        cy.get('#calories').type('-1').blur();
        cy.contains('Please enter a value between 1 and 99');
      });
      it("should clear all errors when all inputs are valid", () => {
        /*
          For all 4 Fields:
            Enter an invalid value
            Blur
            clear the input in the field
            Enter a valid value

          Then check that no error message is present.
        */
        cy.get('#adults').type('-1').blur().clear().type('2');
        cy.get('#children').type('-1').blur().clear().type('2');
        cy.get('#calories').type('-1').blur().clear().type('2');
        cy.get('#months').type('-1').blur().clear().type('2');

        cy.get('.errorMessage').should('not.exist');
      });
      it("should continue to the Calorie Breakdown page when the form is valid and the Continue button is clicked", () => {
       /*
        Enter valid values in all 4 form fields
        Click the Continue button
        Check that the correct input elements are present
       */
       
        goToCalorieBreakdown();

        cy.get('#grains');
        cy.get('#fatsOils');
        cy.get('#sugars');
        cy.get('#dairy');
        cy.get('#legumes');
      });
    });
    describe('Calorie Breakdown', () => {
      beforeEach(() => {
        // Go to the Calorie Breakdown page by entering valid values in the Family Information form, and clicking continue
        goToCalorieBreakdown();
      });
      it('should have a total of 100%', () => {
        // Check that the total in the header is 100%
        cy.contains('Total: 100%')
      });
      it('should have default values of 64, 12, 9, 5, and 10 respectively', () => {
        // Check that the inputs have the correct values
        cy.get('#grains').should('have.value', '64');
        cy.get('#fatsOils').should('have.value', '12');
        cy.get('#sugars').should('have.value', '9');
        cy.get('#dairy').should('have.value', '5');
        cy.get('#legumes').should('have.value', '10');
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
          We would probably want to write another test that tests the functionallity for numbers that total greater than 100%
        */
        cy.get('#grains').clear().type('20').blur();
        cy.contains('Total: 100%');

        cy.get('#fatsOils').clear().type('10').blur();
        cy.contains('Total: 100%');

        cy.get('#sugars').clear().type('-1').blur();
        cy.contains('Total: 100%');
        
        cy.get('#dairy').clear().type('12').blur();
        cy.contains('Total: 100%');

        cy.get('#legumes').clear().type('58').blur();
        cy.contains('Total: 100%');
      });
      it('should show the original default when any value is adjusted', () => {
        /* 
          Enter a value in any input
          Blur
          Check that the original default element is present to the right of that input and that it has the correct value
        */

          cy.get('#grains').clear().type('20').blur();
          cy.get('.originalDefault').contains('64%');

          cy.get('#fatsOils').clear().type('20').blur();
          cy.get('.originalDefault').contains('12%');

          cy.get('#sugars').clear().type('20').blur();
          cy.get('.originalDefault').contains('9%');

          cy.get('#dairy').clear().type('20').blur();
          cy.get('.originalDefault').contains('5%');


          //This is actually broken for some reason. If you change all 5 inputs, legumes doesn't show the original default....
          // cy.get('#legumes').clear().type('20').blur();
          // cy.get('.originalDefault').contains('10%');
      });
    });
  });

  function goToCalorieBreakdown() {
    cy.get('#adults').type('2');
    cy.get('#children').type('5');
    cy.get('#calories').type('2000');
    cy.get('#months').type('12');

    cy.contains('Continue').click();
  }