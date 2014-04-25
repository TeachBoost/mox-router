/**
 * Test the router module
 */

var chai = require( 'chai' ),
    expect = chai.expect,
    Router = require( '../' );

describe( 'Router', function () {

    it( 'should be a function', function () {
        expect( Router )
            .to.be.a( 'function' );
    });

    // test some basic properties and their types
    it( 'should have Page property', function () {
        expect( Router )
            .to.have.property( 'Page' );
    });

    it( 'should have Page property that is a function', function () {
        expect ( Router.Page )
            .to.be.a( 'function' );
    });

});
