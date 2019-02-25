module.exports = {
    elements: {
        searchItem: 'input[type=text]',
        emailField: 'input[type=Email]',
        continueBtn: '*[data-selector="continue-login"]',
        password: 'input#okta-signin-password',
        signinBtn: 'input#okta-signin-submit.button.button-primary'
    },
    xpaths:{
        emailField: "//input[@id='email']",
        continueBtn: "//button[@type='button']",
        password: "//input[@placeholder='Password']",
        signinBtn: "//input[@id='okta-signin-submit']"
    }
  };