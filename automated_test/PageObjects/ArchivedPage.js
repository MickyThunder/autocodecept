const { I } = inject();
const {expect} = require('chai')

module.exports = {

  // insert your locators and methods here
  fields: {
    searchField: "#url",
   
  },
  submit:"//input[@type='submit']",
  results:"//div[@class='captures-range-info']",

  searchText(text){
    I.fillField(this.fields.searchField,text);
    I.pressKey('Enter')
    //I.click(this.submit)
  },

  async verifyResult(){
    I.waitForElement(this.results,10);
    I.see('February 8, 2011')
    let result = await I.grabTextFrom(this.results)
    
    
   return result
  },
  async verifyResultTerm(){
    I.waitForElement('.result-list',10);
 
     
 
  }

}
