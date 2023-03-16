# Aakil Wang's assessment

## Application Overview

The CodeScreen Films Analysis Service is a `React` application that allows users to display certain statistics about films for a given director.

It uses the following libraries / technologies - don't hesitate to refer to the docs if you need to:

* [React](https://reactjs.org/) - JavaScript library for building user interfaces.
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for browsers.
* [Cypress](https://www.cypress.io/) - End to End front-end testing framework.
<br><br>

## Your Task

The application landing page contains a Form consisting of an input text box and a submit button:
<br><br>

![App Homepage](/public/app_homepage.png)
<br><br>
Once you enter a director name into the input box and submit the form, various statistics about the films directed by that director should be displayed:

<br>

![App Stats Display](/public/app_stats_display.png)
<br><br>
The full list of films, directed by the given director, is retrieved from the CodeScreen Films REST API. <br><br>
This API is a service that contains one endpoint,`GET` https://app.codescreen.com/api/assessments/films, which returns the details of all films directed by the given director. The director name is passed in as a `query param` variable called `directorName`.

For authentication, you need to send your API token in the `Authorization HTTP header` using the [Bearer authentication scheme](https://tools.ietf.org/html/draft-ietf-oauth-v2-bearer-20#section-2.1). Your API token is `8c5996d5-fb89-46c9-8821-7063cfbc18b1`.

When you send an `HTTP GET` request to the endpoint above, the response will be a `200 OK`, which includes a body containing a list of film data in `JSON` format. 
<br><br> 

An example response is the following:

    [
        {
            "name": "Inception",
            "length": 148,
            "rating": 8.8,
            "releaseDate": "2010-07-08",
            "directorName": "Christopher Nolan"
        },
        {
            "name": "Interstellar",
            "length": 169,
            "rating": 8.6,
            "releaseDate": "2014-11-07",
            "directorName": "Christopher Nolan"
        }
    ]

The `name` field represents the name of the film. The `length` field represents the duration of the film in minutes. The `rating` is the <a href="https://www.imdb.com/" target="_blank">`IMDb`</a> rating for the film, out of 10. The `releaseDate` is the date in which the film was released in the United Kingdom, and the `directorName` field is the name of the film's director.

<br>

**Note** that if no films are found for the given director, the following should be displayed:

<br>

![App Stats Display](/public/app_stats_display_no_user.png)
<br><br>

**Important** ⚠️

For each element you create for the director name text input, submit button and the stats, the element must contain the matching ID from the table below: 

| Element | ID |
| --- | ----------- |
| Input box | `input-box`
| Input form | `input-form`
| Best rated film | `best-rated-film` |
| Longest film duration | `longest-film` |
| Average rating | `average-rating` |
| Shortest days between releases | `shortest-days` |

<br>

These are required in order for the [Films.cy.js](cypress/e2e/Films.cy.js) Cypress tests to select the correct elements.

All tests in the `Films.cy.js` test file should pass if your solution has been implemented correctly.

## Requirements
The [Films.cy.js](cypress/e2e/Films.cy.js) file should not be modified. If you would like to add your own E2E tests, you can add these in a separate file in the `cypress/e2e` folder.

You may also add your own unit test files, using the [Jest](https://jestjs.io/) framework, inside the `src` folder.

All required styling is already in place, so there is no need to add or modify any of the existing `CSS` files.

The `package.json` file should only be modified to add any third-party dependencies required for your solution. None of the existing dependencies and versions should be changed. Note that other dependencies (that are not currently in `package.json`) are not required to implement a working solution. 

## Running
Run `npm install` to install all dependencies, then run `npm start` to build and launch the React application locally. Navigate to http://localhost:3000/. The app will automatically reload if you change any of the source files.

## Tests
Run `npm run cy:test` to run the Cypress E2E test files. These should all pass if your solution has been implemented correctly.

##

This test should take no longer than 3 hours to complete successfully.

Good luck!
## License

At CodeScreen, we strongly value the integrity and privacy of our assessments. As a result, this repository is under exclusive copyright, which means you **do not** have permission to share your solution to this test publicly (i.e., inside a public GitHub/GitLab repo, on Reddit, etc.). <br>

## Submitting your solution

Please push your changes to the `main branch` of this repository. You can push one or more commits. <br>

Once you are finished with the task, please click the `Submit Solution` link on <a href="https://app.codescreen.com/candidate/30bd233a-805c-4b5d-9bcb-3743c5e150f9" target="_blank">this screen</a>.