const googlePage = require('./pages/google.js')

module.exports = {
    tags: ['google'],
  'step one: navigate to Google' : function (client) {
    client
      .url('https://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible(googlePage.elements.searchItem)
      .setValue('input[type=text]', 'BrowserStack\n')
      .pause(1000)
      .assert.title('BrowserStack - Google Search')
      .pause(500)
      .end();
  }  
};


