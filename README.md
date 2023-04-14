# svg-logo-gen
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)
## Description

To generate quick logos for my projects to add to the README, while making my  work look more professional. allowing the delay of hiring a graphic designer for a year or two. With this project i was able to learn more about javascript and developing with TDD

## Table of Contents 

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## User Story
AS a freelance web developer  
I WANT to generate a simple logo for my projects  
SO THAT I don't have to pay a graphic designer  

## Acceptance Criteria
GIVEN a command-line application that accepts user input  
WHEN I am prompted for text  
THEN I can enter up to three characters  
WHEN I am prompted for the text color  
THEN I can enter a color keyword (OR a hexadecimal number)  
WHEN I am prompted for a shape  
THEN I am presented with a list of shapes to choose from: circle, triangle, and square  
WHEN I am prompted for the shape's color  
THEN I can enter a color keyword (OR a hexadecimal number)  
WHEN I have entered input for all the prompts  
THEN an SVG file is created named `logo.svg`  
AND the output text "Generated logo.svg" is printed in the command line  
WHEN I open the `logo.svg` file in a browser  
THEN I am shown a 300x200 pixel image that matches the criteria I entered  

## Installation

  Clone - git clone git@github.com:KevinRhode/svg-logo-gen.git  
  Node.js - Verison 16.18.0  
  [DownloadLinks](https://nodejs.org/download/release/v16.18.0/)  
  Install Node.js, once done move onto next
  Navigate to index.js file location in terminal  
  npm - npm install  


## Usage

 [Demo](https://drive.google.com/file/d/1yqCcBHQa8HxnyhlX4t1lHXM1DBMCHzjv/view)  
 
  Navigate to index.js file location in terminal  
  Node index.js  
  this will start the program, and begin asking for user inputs


## Credits

https://github.com/jwarby/inquirer-maxlength-input-prompt  
https://htmlcolorcodes.com/color-names/
https://choosealicense.com/

## License

MIT License - https://choosealicense.com/licenses/mit/

## Tests

TDD - Jest with shapes.js.

to Run tests, Navigate to index.js file location in terminal.
enter npm run test into the terminal. this will run the shapes and index tests