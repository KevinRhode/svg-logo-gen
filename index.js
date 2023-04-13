// GIVEN a command-line application that accepts user input 
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const {Triangle, Circle, Square} = require('./lib/shapes.js')
const {writeFile} = require('fs/promises');
const testColor = require('./colorNamesTest.json');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
//suger for inquirer prompt, with maxlength added for added Feature
class Question {
    constructor(name,type,message,choices,maxLength){
        this.name = name;
        this.type = type;
        this.message = message;
        this.choices = choices;
        this.maxLength = maxLength;
    }
}
const questions = ()=>{
    inquirer
    .prompt(
        [
        // WHEN I am prompted for text  
        // THEN I can enter up to three characters
        // note input type, uses imported prompt
        new Question('text.text','maxlength-input','Enter up to 3 Characters...','',3),
        // WHEN I am prompted for the text color
        // THEN I can enter a color keyword (OR a hexadecimal number)
        new Question('text.color','input','Enter Text Color: keyword, or hex; hex must include # at the begining to be used'),
        // WHEN I am prompted for a shape
        // THEN I am presented with a list of shapes to choose from: circle, triangle, and square
        new Question('shape','list','Select Shape...',['Triangle','Circle','Square']),
        // WHEN I am prompted for the shape's color
        // THEN I can enter a color keyword (OR a hexadecimal number)
        new Question('color','input','Enter Shape Color: keyword, or hex; hex must include # at the begining to be used')
        ]
        )
    .then((response)=>{
        console.log(response);        
        //error check
        //AC Check THEN I can enter up to three characters
        if (response.text.text.length > 3) {
            //tell user info on why
            throw new Error('Your Text was longer then 3.');
        }
        //AC Check THEN I can enter up to three characters
        if (!colorHelper(response.text.color)) {
            //tell user info on why
            throw new Error('Your Text color is not valid');
        }
        //AC Check THEN I can enter a color keyword (OR a hexadecimal number)
        if (!colorHelper(response.color)) {
            //tell user info on why
            throw new Error('Your shape color is not valid');
        }
        return response;
    })
    .then((response)=>{
        // WHEN I have entered input for all the prompts
        return makeLogo(response);
    }) 
    // AND the output text "Generated logo.svg" is printed in the command line    
    .then(()=>console.log('Generated logo.svg'))
    .catch((err)=> console.log(err));
}
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered 
//function to return ture if passing name or hex test.
const colorHelper = (color)=>{

    //hex test
    if (color.includes('#')) {
        const hexPattern = '^#(?:[0-9a-fA-F]{3}){1,2}$'
        const regex = new RegExp(hexPattern);
        if (regex.test(color)) {
            return true;
        }
        

    } 
    //name test
    else {
        for (const {colorName} of testColor) {
            if (colorName.toLocaleLowerCase() === color.toLocaleLowerCase()) {
                return true;
            }
            
        }
    }
    return false;
    
}
//create file from response
const makeLogo = (response)=>{

    const{text,shape,color}=response;
    let obj = {};
    let data = '';
    switch (shape) {
        case 'Triangle':
            //create obj of case
            obj = new Triangle();
            obj.setColor(color);              
            break;
        case 'Circle':  
             //create obj of case
             obj = new Circle();
             obj.setColor(color);            
            break;
        case 'Square':   
             //create obj of case
             obj = new Square();
             obj.setColor(color);         
            break;    
        default:
            break;
    }
    //render string from obj and text
    data = renderText(obj,text);
    // THEN an SVG file is created named `logo.svg` 
    writeFile('./examples/logo.svg', data);

}
//takes and square, triangle, or circle and creates the svg, get defaults of size from default options on obj
const renderText = function(obj,{text}) {
    const {version,width,height,xmlns} = obj;
    return`<svg version="${version}"
        width="${width}" height="${height}"
        xmlns="${xmlns}">
        ${obj.render()}
        <text x="150" y="122" font-size="60" text-anchor="middle" fill="white">${text}</text>
        </svg>`;
    
}
//enter into questions
const init =()=>{
    questions();
}
//start the program
init();
module.exports = {Question}
