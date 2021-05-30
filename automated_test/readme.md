You have been asked to check for the presence of the Willow site in the Internet Archive (the Wayback machine).

Write automated functional tests for the following:

Starting from the [Internet archive](https://archive.org) home page:
1. I can search for the [Willow web site](https://willowinc.com) and see it listed in the archive
1. I can see that the site was first archived on Feb 8, 2011 and has since been archived another 18 (or more) times
1. I can prove that the archive's web server is an `nginx` server

Write one functional test that performs the following acceptance test
> Given I have a search term that is not a domain name
> When I search the web archive for that term
> Then a paged list of sites containing the search term are returned
>
> Note: for this exercise a *domain name* is a search term with a period (.) in it

Your tests must be written in C# and .NET Core 3.1+. You can use any tools or libraries you like

Please submit only source code. Submissions with binary content will not be reviewed.

run the test $ npm test