const {
    expect
} = require("chai");

const {
    I,
    ArchivedPage
} = inject();


let result;
Given('I am on internet archive site', () => {

    I.amOnPage(process.env.BASE_URL)


});
//expected 'Saved 46 times between February 8, 2011 and March 14, 2021.' to include 'Saved 46 times between Feb 8, 2011 and March 14, 2021.'
When('I search for {string}', (text) => {
    ArchivedPage.searchText(text)

});
Then('I verify that the site is listed in the archive', async () => {
    result = await ArchivedPage.verifyResult();
    expect(result).to.be.equal('Saved 46 times between February 8, 2011 and March 14, 2021.')
    console.log(result)

});

Then('I can see the site was first archived on {string} and has since been archived another {string} times', (firstArchived, times) => {
    expect(result).to.be.equal('Saved ' + times + ' times between ' + firstArchived + ' and March 14, 2021.')
});
Then('Web server is nginx server', async () => {

    let response = await I.getRestRequest(process.env.BASE_URL + 'wayback/available?url=www.willow.inc');
    expect(response.statusCode).to.be.equal(200)
    expect(response.headers.server).contains('nginx')


});

Given ('I have a search term that is not a domain name',()=>{
    I.amOnPage(process.env.BASE_URL)
    ArchivedPage.searchText("java");
    
    ArchivedPage.verifyResultTerm();
})
When ('I search the web archive for that term',()=>{
    I.see('java')
})
Then ('a paged list of sites containing the search term are returned',async ()=>{
    await I.seeElement('.result-item')
})
