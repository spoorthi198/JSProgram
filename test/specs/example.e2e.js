const homePage =  require('../pageobjects/login.page');

describe('Interaction with home page elements', function(){

    it("Verify home page elements",  async ()=> {
      await browser.url('https://www.freshworks.com/');
      await browser.pause(5000)
    
        
        console.log(homePage.pageHeader.getText());
      
    });
    
});