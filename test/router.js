/**
 * Test the router module
 */

var expect = chai.expect;

describe( 'Router', function () {

    it( 'should be a function', function () {
        expect( Router )
            .to.be.a( 'function' );
    });

    it( 'should instantiate an object', function () {
        var TestRouter = new Router();
        expect( TestRouter )
            .to.be.an( 'object' );
    });

    it( 'objects should have page property that is a function', function () {
        var TestRouter = new Router();
        expect ( TestRouter.page )
            .to.be.a( 'function' );
    });

    it( 'should subclass children with access to .page', function () {
        // create subclass 
        var TestRouter = Router.subclass({
            constructor: function () {},
            method: function () {
                return this.page;
            }
        });
        // instantiate
        var Test = new TestRouter();
        expect ( Test.method() )
            .to.be.a( 'function' );
    });

    it( 'should call controller callback when route is hit', function ( done ) {
        // create controller
        var Controller = {
            example: function ( ctx, next ) {
                done();
            }
        }
        // create subclass
        var TestRouter = Router.subclass({
            constructor: function () {
                this.setup();
            },
            setup: function () {
                this.page( '/example', Controller.example );
            }
        });
        // instantiate
        var Test = new TestRouter();
        Test.page( '/example' );
    });

});