export class registerPage {
  weblocators = {
    firstName: "#input-firstname",
    lastName: "#input-lastname",
    email: "#input-email",
    telephone: "#input-telephone",
    password: "#input-password",
    passwordConfirm: "#input-confirm",
    policyCheckbox: `input[value='1'][name='agree']`,
    continue: `input[value='Continue']`,
  };

  openURL() {
    cy.visit(Cypress.env("Url"));
  }

  enterFirstName(FName) {
    cy.get(this.weblocators.firstName).type(FName);
  }

  enterLastName(LName) {
    cy.get(this.weblocators.lastName).type(LName);
  }

  enterEmail(email) {
    cy.get(this.weblocators.email).type(email);
  }

  enterTelephone(telephone) {
    cy.get(this.weblocators.telephone).type(telephone);
  }

  enterPassword(password) {
    cy.get(this.weblocators.password).type(password);
    cy.get(this.weblocators.passwordConfirm).type(password);
  }
  selectCheckbox() {
    cy.get(this.weblocators.policyCheckbox).check();
  }
  clickContinue() {
    cy.get(this.weblocators.continue).click();
  }
}
