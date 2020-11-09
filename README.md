# Project Outline

A restful **JSON API** is provided at [API](http://nyx.vima.ekt.gr:3000) that exposes the following schema:

**ENDPOINT**: _/api/books_  
**METHOD**: _POST_  
**PARAMS**: _page, itemsPerPage, filters_  
**DEFAULT VALUES**: _1, 20, Empty array []_  
**Response**:  
`
{  
  books: [  
    {  
      book_author: [“xx”],  
      book_publication_city: “xx”,  
      book_publication_country: “xx”,  
      book_publication_year: “xx”,  
      book_publication_city: “xx”,  
      book_pages: 23,  
      book_title: “xx”,  
      id: 1  
    }  
  ],  
  count: 2000  
}  
`  

## Requirements

1. Using React, build a webapp that queries this paginated endpoint. Use Redux to save the results and then print out the results as a list on the page. 
2. The app should be paginated with the pagination reflected in the url (so when the page is refreshed, the same results are shown).
3. Write at least one component as a React class based component (the rest can be functional components). 
4. Write at least one unit test.
5. Host your code on Github, put all the code in a Pull Request against the (probably) empty repo.

## Optional

1. Add a search field to the app that upon request populates the filters post param as follows: filters:[{type: "all", values: ["YOUR_SEARCH_FIELD_CONTENTS"]}]
2. Use Material-UI as a component library.
3. Add loading state


# About the repo

It was created with create-react-app for a quicker development

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# TO DO

1. API Filtering
  - display an Input box and a button. On entering text and filter return data that matches from the API

2. Styling
  - Use a styling framework (Material-UI possibly) and make the project look neat


# What was challenging
  - The most challenging part of this is unit testing. Haven't worked on it before, so it is a learning process. Got the gist of it,now it's time to learn.

