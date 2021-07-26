Feature: Search for medicines
  Description: Allow  users to search for many medicines

Scenario: User searches for a Para medicine
     Given a user is on the advanced search screen
     When the user click on smPC
     And on the all these words field enter 'Para'
     And clicks on Search Full Document
     And selects Accord-UK Ltd
     And user clicks on Search
     Then the user will be redirected to search results with 'Search results for Para'