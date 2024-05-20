const {Circle, Square, Triangle} = require('../lib/shapes');
//const SVG = require('../lib/svg');

//could also make overall shapes test w/each nested within, but i don't love nesting functions for miles.
describe('Circle', () => {
    describe('render', () => {
        it('should produce circle HTML', () => {
            const greenCircle = new Circle("green","circle").render();
            
            expect(greenCircle).toEqual(`<circle cx="150" cy="100" r="80" fill="green" />`);
            //green comes out as an object? not sure why yet. template literal didn't help.
            //think mocking function is what i need

            //test to isolate expecting green
            expect(greenCircle.color == "green");

        })
    })
});