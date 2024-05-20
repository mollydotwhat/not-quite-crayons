const {Circle, Square, Triangle} = require('../lib/shapes');
//const SVG = require('../lib/svg');

//could also make overall shapes test w/each nested within, but i don't love nesting functions for miles.
describe('Circle', () => {
    describe('render', () => {
        it('should produce circle HTML', () => {
            const greenCircle = new Circle("green","circle").render();
            
            expect(greenCircle).toEqual(`<circle cx="150" cy="100" r="80" fill="green" />`);
        })
    })
});

describe('Square', () => {
    describe('render', () => {

        it('should produce blue square html', () => {
            const blueSquare = new Square("blue", "square").render();
            expect(blueSquare).toEqual(`<rect x="70" y="20" width="160" height="160" fill="blue" />`)
        });
    });
});