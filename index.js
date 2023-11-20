const fs = require('fs');
const inquirer = require('inquirer');
const SVG = require('./lib/svg')
const {Circle, Square, Triangle} = require('./lib/shapes')

function init(){
    
    inquirer.prompt([
        {
            type: input,
            name: logoText,
            message: 'Choose up to three letters for your logo text',
        },
        {
            type: list,
            name: shapeChoice,
            message: 'Choose a shape for your logo badge',
            choices: [
                "Circle",
                "Square",
                "Triangle"
            ]
        },
        {
            type: list,
            name: shapeColor,
            message: 'Choose a background color',
            choices: [
                "red",
                "blue",
                "yellow",
                "green",
                "purple",
                "orange"
            ]
        },
        {
            type: list,
            name: textColor,
            message: 'Choose a text color',
            choices: [
                "white",
                "black",
                "pink"
            ]
        }
    ]).then( userDesign => {
        const userShapeChoice = userDesign.shapeChoice;
        const shapeColorChoice = userDesign.shapeColor;
        const textChoice = userDesign.logoText;
        const textColorChoice = userDesign.textColor;
        // putting these separately didn't work, so...
        const userLogo = new SVG(userShapeChoice, shapeColorChoice, textChoice, textColorChoice);
        userLogo.writeText();
        userLogo.drawShape();
       
      })
      finalProduct = userLogo.allTogether();
      fs.writeFile('logo.svg', finalProduct);
 
};

init();