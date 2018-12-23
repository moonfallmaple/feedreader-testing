Feed Reader Testing
===============================

# Table of Contents

* [Description](#description)
* [Project Instructions](#project-instructions)
* [Run the Application](#run-the-application)
* [To Complete the Tests](#to-complete-the-tests)
* [Code Dependencies](#code-dependencies)



## Description

In this project you are given a web-based application that reads RSS feeds. You will use [Jasmine](http://jasmine.github.io/) to write a number of tests against a pre-existing application.

## Run the Application

In order to run the application you can:

* Download as .zip file
* Clone or fork this project:

    ```
    $ git clone https://github.com/stearruda/fend-feed-reader-testing.git
    ```
After that, open the `index.html` and check the test results.


## To Complete the Tests

1. Familiarize yourself with the starter code
    * Open up `index.html` and review the functionality of the application within your browser
    * What is all the code in `app.js` doing? Be sure to read all code comments
    * Check out `style.css`. How is styling applied to the application?
2. Explore the Jasmine spec file in `feedreader.js`
    * This is the file in which you'll be writing your tests
    * Make sure to read all code comments here as well
    * Review the [Jasmine documentation](http://jasmine.github.io) if needed
3. Edit the `allFeeds` variable in `app.js` to make the provided test fail
    * See how Jasmine visualizes this failure in your application
    * Return the `allFeeds` variable to a passing state after reviewing the failed test
4. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined _and_ that the URL is not empty
    * For example, how would you use a `for...of` loop in this test?
5. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty
    * Think about how you wrote the previous test. What are you testing for this time?
6. Write a new test suite named `"The menu"`
    * What are you `describe`-ing in this test suite?
7. Write a test that ensures the menu element is hidden by default
    * You'll have to analyze the HTML and the CSS to determine how the hiding/showing of the menu element is implemented
    * What code in `app.js` is directly involved with toggling the menu on and off?
8. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display itself when clicked, and does it hide when clicked again?
    * Think about how you wrote the previous test. What is different this time around?
    * Which clickable element are you checking for?
    * How do you "simulate" a mouse click that element without actually clicking it?
9. Write a test suite named `"Initial Entries"`
    * What are you `describe`-ing in this test suite?
10. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container
    * How does Jasmine's `beforeEach()`function work?
    * How does the `loadFeed()` function in `app.js` work? Is it synchronous or asynchronous?
11. Write a test suite named `"New Feed Selection"`
    * What are you `describe`-ing in this test suite?
12. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes
    * How is this test different from the previous test?

 * No test should be dependent on the results of another
 * Callbacks should be used to ensure that feeds are loaded before they are tested
 * Error handling should be implemented for undefined variables and out-of-bound array access
 * When complete, all of your tests should pass

When you're all finished, write a `README` file detailing all steps required to successfully run the application. If you have added additional tests, provide documentation for what these future features are and what the tests are checking for.

## Code Dependencies

* [Project Feed Reader Testing - Starter Code](https://github.com/udacity/frontend-nanodegree-feedreader)
* [jQuery](https://jquery.com/)
* [Normalize.css](https://necolas.github.io/normalize.css/)
* [Handlebars](https://handlebarsjs.com/)
* [Google's JavaScript Loader API](https://www.google.com/jsapi)
* [Jasmine](https://jasmine.github.io/)
* Icon: [Icomoon](https://icomoon.io/)
* Fonts: [Google Fonts](https://fonts.google.com/)
