const homePage =  require('../pages/home.page');

describe('Interaction with home page elements', function(){

    it("Verify home page elements",  async ()=> {
      await browser.url('https://www.freshworks.com/');
      await browser.pause(5000)
      let text= await homePage.pageHeader.getText();
        
        console.log(text);
      
    });
    
});