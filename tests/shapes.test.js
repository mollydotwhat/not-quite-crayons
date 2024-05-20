const {Circle, Square, Triangle} = require('./lib/shapes');
const SVG = require('./lib/svg');

//could also make overall shapes test w/each nested within, but i don't love nesting functions for miles.
describe('Circle', () => {
    describe('render', () => {
        it('should produce circle HTML', () => {
            const aCircle = new Circle();
            //do I need to include color to test this properly
            // & if so should test SVG functions
        })
    })
});