Feature: Navigation to sign up screens
  Description: User signs up for account

Scenario: User navigates to sign up screen
     Given a user is on the homescreen and accepts the Cookie Policies
     When the user taps Sign up
     Then the user will be taken to signup page with 'Welcome to emc'

Scenario: User navigates to sign up through request to emc screen
     Given a user is on the homescreen and accepts the Cookie Policies
     When the user taps request access to emc
     Then the user will be taken to request access with 'Already registered with emc med data?'

