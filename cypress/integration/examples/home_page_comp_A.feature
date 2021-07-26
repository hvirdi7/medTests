Feature: Navigation to companies within A
  Description: Companies within A are appearing with all contact information visible

Scenario: User navigates to company A and views all information
    Given a user is on the homescreen and accepts the Cookie Policy
     When the user taps on first company from A
     Then the medical information direct line appears as 0800 085 8678
     And the fax number is shown "+44 (0) 1628 856402"
     And the address will be shown as "Menarini House, Mercury Park, Wycombe Lane, Wooburn Green, Buckinghamshire, HP10 0HH"
     And the medical information email appears as 'menarini@medinformation.co.uk'
     And the telephone appears as "0800 085 8678"
     And the Out of hours telephone appears as "0800 085 8678" 
     And the logo shows for Menarini
     And the results found will be "22" results found 
