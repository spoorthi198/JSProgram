class HomePage{

    get pageHeader(){return $('h1')};
    get subHeader(){return $('div.banner-text-content>p.sub-text')};
}
module.exports =new  HomePage();