const {Shape, Circle, Square, Triangle} = require('./shapes');

class SVG {
    constructor(shape, shapeColor, logoText, textColor){
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.logoText = logoText;
        this.textColor = textColor;
        this.textFill = "";
        this.newShape = ""
    };
    writeText(){
        if (this.shape == "Triangle"){
            // text goes further down
            var textFill =
            `<text x="150" y="130" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>`
        } else {
            //text goes in the middle
            this.textFill =
            `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>`
        }
        return textFill;
    };

    drawShape(){
        if (this.shape == "Circle"){
            this.newShape = new Circle(this.shapeColor).render();
        } else if (this.shape == "Square") {
            this.newShape = new Square(this.shapeColor).render();
        } else if (this.shape == "Triangle"){
            vthis.newShape = new Triangle(this.shapeColor).render();
        }
    };
    
    allTogether(){

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.textFill}${this.newShape}</svg>`
      
        
    }
}

module.exports = SVG