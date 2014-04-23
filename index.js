/**
 * Base Router class
 */

var Stapes = require( 'stapes' ),
    Page = require( 'page' );

// base model class subclasses stapes object
var Router = Stapes.subclass({

    constructor: function () {},

    // start the page router
    start: function () {
        this.Page.start();
    }

});

// add the Page library
Router.Page = Page;

// return
module.exports = Router;
