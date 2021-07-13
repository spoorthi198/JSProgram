describe('Interaction with elements', function(){

    it("Enter Value in a field", async function () {
        await browser.url('/');
        const Search = await $('#twotabsearchtextbox')
        await Search.setValue('MacBook');
        browser.pause(5000)
      
    })

    it("Get text from lable", async function () {
        await browser.url('/');
        const Search = await $('#twotabsearchtextbox')
        await Search.setValue('MacBook');
        browser.pause(5000)
        const lable = await $('span.a-size-base.a-color-base');
        let text = await lable.getText();
        console.log(text);
    })

    it("Search icon test", async function () {
        await browser.url('/');
        const icon = await $('#nav-search-submit-button')
        await icon.click();
       console.log('search icon is clicked');
    })


    })
