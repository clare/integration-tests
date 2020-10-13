# Cypress test design

Design considerations for these tests:
 * Each test can be run many times against the same api/browse server
 * Tests should run both on developers own api servers and as an integration test on the browse-test server. 
 * Tests should be short and to the point so it is easy to understand what each test is trying to achieve
 * Tests should not break other test files 


## Test names

To stop the tests interferring with each other, each test creates the users, groups and cameras that it needs to run.   

The created objects 'cypress' added in front of them so we can easily identify them as test artifacts.   To make sure they are unique they have a random 8 letter string added to the end.  So the name 'Anna' might become 'cypress_Anna32j4skld'

The actual tests shouldn't have to deal with this much.   In the test scripts, use nice, descriptive names and then functions such as cy.signInAs(username) will do the conversion.   If you need to convert a name yourself, then use getTestName(name), from cypress/commands/names.js.


## Test independence

The tests written here are integration tests and often have a fair bit of setup to get everything to run.  If it was required that each (it() block) could run on it's own then this would make the tests take longer to run.   Therefore for these tests the following applies:
  *  Separate test files (.js) should run completely independantly of each other and should not affect each other in any way. 
  *  Try to keep test files smallish and covering something specific.
  *  It is okay if it() blocks are dependant on the it() blocks above them in the file. 


# Development Tips

## Specify uniqueness string

Many times when you are developing tests you don't want to run the whole test and don't need to create all the users and cameras etc everytime as that's just too slow.   Instead, tell cypress what unique string to use.   Then you can focus on the part of the test you are developing.  

Instead of:
``` javascript
  cy.apiCreateUser('Anna');   // which will automatically generate a random 8 letter unique identifier
```

use:
``` javascript
  names.initializeTestNames('c57ad711');  // specify what unique identifier to use
  cy.signInAs('Anna')  // sign in as user (cypress_Annac57ad711) who already exists
```

## Run just the it() part that you are working on. 

To run just one part of the test use .only as in

``` javascript
it.only('Only run this block and not any of the other it blocks') {

}
```



