// GIVEN a command-line application that accepts user input 
const inquirer = require('inquirer');
const {Triangle} = require('./lib/shapes.js')
const {writeFile} = require('fs/promises');

class Question {
    constructor(name,type,message,choices){
        this.name = name;
        this.type = type;
        this.message = message;
        this.choices = choices;
    }
}

// WHEN I am prompted for text  
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts

const questions = ()=>{
    inquirer
    .prompt(
        [
        new Question('text','input','Enter up to 3 Characters...'),
        new Question('shape','list','Select Shape...',['Triangle','Circle','Square']),
        new Question('color','input','Enter Color: keyword, or hex; hex must include # at the begining to be used')
        ]
        )
    .then((response)=>{
        console.log(response);
        return response;
    })
    .then((response)=>{
        return makeLogo(response);
    })    
    .then(()=>console.log('Generated logo.svg'))
    .catch((err)=> console.log(err));
}

const makeLogo = (response)=>{

    const{text,shape,color}=response;

    let data = '';
    switch (shape) {
        case 'Triangle':
            let render = new Triangle('','','','','',color,'')
            render.RenderText = renderText(text);            
            data += render.render();
            break;
        case 'Circle':            
            break;
        case 'Square':            
            break;    
        default:
            break;
    }

    writeFile('./examples/logo.svg', data);


}

const renderText = function(text) {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>`
}

questions();
// console.log("Questions: ",questions());
// THEN an SVG file is created named `logo.svg` 
// AND the output text "Generated logo.svg" is printed in the command line 
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered  

module.exports = {Question,questions}
