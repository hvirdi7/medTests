Feature: Navigation to companies within B
  Description: Companies within B are appearing with all contact information visible

Scenario: User navigates to company B and views all information
     Given a user is on the company B homescreen and accepts the Cookie Policy
     When the user taps on first company from B
     Then the informations direct line appears as 0800 298 0299
     And the telephone appear as "0114 225 9000"
     And the stock availability email appears as 'customercare.bbmuk@bbraun.com'
     And the email appear as 'info.bbmuk@bbraun.com'
     And the medicals information email appears as 'medinfo.bbmuk@bbraun.com'
     And the results found will be "1" results found 