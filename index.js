const inquirer = require("inquirer");
const fs = require("fs");
const generateImage = require("./lib/shapes");

const questions = [
  {
    type: "input",
    name: "characters",
    message: "Enter up to 3 letters",
    validate: function (input) {
      if (input.length > 3) {
        return `Error. Please choose 3 characters or less.`;
      }
      return true;
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Select a color for the text",
    validate: function (input) {
      const texColor = input;
      const regex =
        /^#?([a-f0-9]{6}|[a-f0-9]{3}|green|blue|red|yellow|purple|orange|brown|white|black|)$/;
      return regex.test(texColor);
      // if (regex !== input) {
      // throw new Error ('Please enter a color keyword or hexidecimial color')
    },
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape for your image",
    choices: [
      "Circle", //in generator( of this choice was sellected, aply these features .... )
      "Triange",
      "Square",
    ],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Select a color for the shape",
    validate: function (input) {
      const shapeColor = input;
      const regex =
        /^#?([a-f0-9]{6}|[a-f0-9]{3}|green|blue|red|yellow|purple|orange|brown|white|black|)$/;
      return regex.test(shapeColor);
    },
  },
];

// TODO: Create a function to write logo.sv file
// DATA probably needs to be modified. We are not adding the data (responses) to the file but using it to generate the image
function writeToFile("logo.sv", data) {
  fs.writeFile("logo.sv", data, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("Generated logo.sv");
  });
}

// function to initialize app 
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const template = generateMarkdown(answers);
    console.log(template);
    writeToFile("README.md", template);
  });
}