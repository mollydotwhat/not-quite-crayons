// gary provided svg code 
class Shape {  
    constructor (color){
        this.color = color;
    }
}
class Circle extends Shape {
    constructor (color){
        super(color)
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
      }
}
class Square extends Shape {
    constructor (color){
        super(color)
    }
    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`
      }
}
class Triangle extends Shape {
    constructor (color){
        super(color)
    }
    render() {
        return `<polygon points="50,200 150,0 250,200" fill="${this.color}" />`
      }
}
// may need to adjust color choices

module.exports = {Shape, Circle, Square, Triangle}