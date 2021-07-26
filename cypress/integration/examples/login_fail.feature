Feature: Unsucessful login of user
  Description: User cannot login 

Scenario: User attempts to login with invalid credentials
     Given a user is on the homescreen and accepts the Cookie Policies
     When the user logins in with 'jameUser@hotmail.com' and 'Password123'
     And clicks on Login
     Then the user will be shown 'Username and password combination cannot be found'

Scenario: User attempts to login with valid credentials
     Given a user is on the homescreen and accepts the Cookie Policies
     When the user logins in with 'Harrod@hotmail.com' and 'Password123'
     And clicks on Login

Scenario: User attempts to login with invalid email address
     Given a user is on the homescreen and accepts the Cookie Policies
     When the user logins in with 'Harrodhotmail.com' and 'Password123'
     And taps on remember me 
     And clicks on Login
     Then the following message appears 'Please enter a valid email address'



