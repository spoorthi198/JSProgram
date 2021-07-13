class HomePage{

  async   pageHeader(){return await $('h1')};
  async  subHeader(){return await $('div.banner-text-content>p.sub-text')};
}
module.exports =new  HomePage();