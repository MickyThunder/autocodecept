Feature: Willow functional test

@willow
Scenario: Verify that I can perform search for Willow website on Internet archive site and validate the results
Given I am on internet archive site
When I search for "www.willowinc.com"
Then I verify that the site is listed in the archive
And I can see the site was first archived on "February 8, 2011" and has since been archived another "46" times
And Web server is nginx server

@willow2
Scenario: Verify term search
Given I have a search term that is not a domain name
When I search the web archive for that term
Then a paged list of sites containing the search term are returned