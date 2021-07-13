describe('Interaction with elements', function(){

    it("Capture header value", async function () {
        await browser.url('https://www.freshworks.com/');
        const header = await $('h1')
        let text=header.getText();
        console.log(text);
      
    })

})
