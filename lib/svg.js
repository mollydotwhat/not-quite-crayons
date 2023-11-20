const {Circle, Square, Triangle} = require('./shapes');

class SVG {
    constructor(shape, shapeColor, logoText, textColor){
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.logoText = logoText;
        this.textColor = textColor;
    };
    writeText(){
        if (this.shape == "Triangle"){
            // text goes further down
            var textFill =
            `<text x="150" y="130" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>`
        } else {
            //text goes in the middle
            var textFill =
            `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>`
        }
        return textFill;
    };

    drawShape(){
        if (this.shape == "Circle"){
            var logoBadge = new Circle(this.shapeColor).render();
        } else if (this.shape == "Square") {
            var logoBadge = new Square(this.shapeColor).render();
        } else if (this.shape == "Triangle"){
            var logoBadge = new Triangle(this.shapeColor).render();
        }
        return logoShape;

    };
    allTogether(){
        `<svg version="1.1" width="300" height="200">${this.textFill}${this.logoShape}
        </svg>`
    }
}

module.exports = SVG