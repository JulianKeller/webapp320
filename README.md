# Cash Flow
## Description
A web application that helps people with budgeting.  Users are able to create their own budget to which they can add expenses and goals.


## Current Phase
Testing Phase

## TODO
- [x] Finish Mockup for each of our sites
- [x] Convert to meteor (using meteor_mongo branch)
- [x] Add in Javascript Logic
- [x] Decide on app name - Cash Flow
- [x] Create Logo
- [x] Make Member Support Functional
- [x] Add edit buttons to goals section
- [x] Update edit goals page layout
- [x] Update edit items page layout
- [x] Fix edit button color on budget page
- [x] Add additional info to home page under main image
- [x] Remove non-functioning footer buttons 
- [x] Add some theming to the no-permission page
- [x] Change support page add category and add item buttons to reflect current budget page layout
- [x] Make General Questions Functional
- [x] Ensure functions test for edge cases
- [x] Write Testing Library and run tests

## Testing TODO
After shutting down normal app, run tests with: 
```
meteor test --driver-package practicalmeteor:mocha
```
You can drop a file-name.test.js file anywhere and meteor seems to run it fine.

### Tests
- [x] Test Budget Page Page functions
- [x] Test Summary Template functions
- [x] Test Add Goal Page functions
- [x] Test Add Item Page functions
- [x] Test Edit Goal Page functions
- [x] Test Edit Item Page functions
- [x] Test Add Item Page functions
- [x] Test Support Page Schemas
- [ ] Tests all links

## Bugs to Fix
- [x] Fix text/buttons from overlapping on FAQ page
- [x] Budget Page total can have more than 2 decimals after float
- [x] Budget Page goals progress bar rounds up 1% -> this is a problem with semantic UI
- [x] Make budget page not visible when logged out
- [x] On Add and Edit pages make money inputs only take 2 decimal floats
- [x] Fixed an issue where all users shared the same expenses and goals.

### Non-App TODO
- [x] Practice Presentation
- [ ] Write final project report


### Helpful Plantuml Links
http://plantuml.com/sequence-diagram

http://www.plantuml.com/plantuml/uml

http://plantuml.com/skinparam

## Getting Started

These instructions will get you a copy of the project running on your local machine.

### Prerequisites

This program is best viewed in a web browser such as Google Chrome.

## Installing the program

Go to the webapp320 directory then:
```
cd app/cashflow
meteor npm install
```

## Running the Program
```
meteor
```
Visit http://localhost:3000/ in browser to see page.
## Authors

* **Julian Keller**  - [JulianKeller](https://github.com/JulianKeller)
* **Tyler Higgins**  - [TylerHiggins](https://github.com/tylerhiggins)
