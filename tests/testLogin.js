const login = require('./pages/login')
const masterPass = require('./../conf/masterPass')

module.exports = {
  tags: ['login'],
  before : function(browser) {
        console.log('Setting up...');
      },
    
      after : function(browser) {
        console.log('Closing down...');
      },

      afterEach: function(browser){
        browser
        //.saveScreenshot(browser.saveScreenshot.path + browser.tags)
      },
  
      '1: Login to RFX AE' : function (browser) {
      browser
      .url(browser.launch_url)
      .waitForElementVisible('body', 1000)
      .useXpath()
        .assert.title('RFX Frontend')
        .pause(2*1000)
        .setValue(login.xpaths.emailField, masterPass.email)
        .pause(4*1000)
        .click(login.xpaths.continueBtn)
        .pause(4*1000)
        .setValue(login.xpaths.password, masterPass.password)
        .pause(2*1000)
        .click(login.xpaths.signinBtn)
        .saveScreenshot("./screenshots/" + 'loginAttempt.png')
        .pause(2*1000)
        .saveScreenshot("./screenshots/" + 'LoginPassed.png')
            
    }  


};
