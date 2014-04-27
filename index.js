/**
 * Base Router class
 */

var Stapes = require( 'stapes' ),
    Page = require( 'page' );

// base model class subclasses stapes object
var Router = Stapes.subclass({

    constructor: function () {},

    // wrapper functions for Page library
    page: function () {
        Page.apply( this, arguments );
    },

    start: function () {
        Page.start.apply( this, arguments );
    },

    base: function () {
        Page.base.apply( this, arguments );
    }

});

// return
module.exports = Router;