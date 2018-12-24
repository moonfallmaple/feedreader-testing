/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    // Test suite 1
    // Write a new test suite named "RSS Feeds" 

    describe('RSS Feeds', function() {

        // Test 1.1
        // It tests to make sure that the allFeeds variable
        // has been defined and that it is not empty.

        it(' AllFeeds variable are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Test 1.2
        // It tests to make sure that has a URL defined
        // and that the URL is not empty.
        it('URL are all be defined', function() {
            for (let allFeed of allFeeds){
                expect(allFeed.url).toBeDefined();
                expect(allFeed.url.length).not.toBe(0);
            } 
        });
        
        // Test 1.3
        // It tests to make sure that has a name defined
        // and that the name is not empty.
        
        it('Names are all be defined', function() {
            for (let allFeed of allFeeds){
                expect(allFeed.name).toBeDefined();
                expect(allFeed.name.length).not.toBe(0);
            } 
        });



    });

    // Test suite 2 
    // Write a new test suite named "The menu" 

    describe('The menu', function() {

        // Test suite 2.1
        // It tests to make sure that the menu element is
        // hidden by default.

        it('The menu element is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
    
        });

        // Test suite 2.2
        // It tests to make sure that the menu changes
        // visibility when the menu icon is clicked.

        it('The menu toggle when clicked', function() {
            let menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
         
        });
    
    });


    // Test suite 3
    // Write a new test suite named "Initial Entries" 

    describe('Initial Entries', function() {

        // Test 3.1
        //  It tests to make sure that the loadFeed function is
        //  called and completes its work, there is at least
        //  a single .entry element within the .feed container.
         
        beforeEach(function(done){
            loadFeed(0,function(){
                done();
            });
        });


        it('Has at least one entry', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });

    })

    
     // Test suite 4        
    // Write a new test suite named "New Feed Selection"

    describe('New Feed Selection', function() {

        // Test suite 4.1 
        // It tests to make sure that when a new feed is loaded
        // by the loadFeed function that the content actually changes.
         
        let prevFeedData,
            newFeedData;

        beforeEach(function(done) {
            loadFeed(0, function() {
            // Load and store previous Feed data
            // document.getElementByClass('.feed').innerHTML;
                prevFeedData = $('.feed').html();

            loadFeed(1, function(){
                // Load and store new Feed data
                newFeedData= $('.feed').html();
                // Start tests
                done();
            });
            });
        });
        it('The content changes as a new feed is loaded', function(done) {
            expect(prevFeedData).not.toBe(newFeedData);
            done();
        });

    })
 
}());
