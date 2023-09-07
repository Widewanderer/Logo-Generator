import inquirer from "inquirer";
import fs from "fs";
import { Shape, Triangle, Square, Circle } from "./lib/shapes.js";
// const fs = require("fs");
// const generateSvg = require("./lib/shapes");

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

// // Define a function to generate SVG content based on user answers
// function generateSvg(answers) {
//   // Your SVG generation logic here based on user answers
//   // Construct the SVG content as needed
//   // For example:
//   const svgContent = `
//     <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
//       <!-- Add your shapes and styles here based on user answers -->
//     </svg>
//   `;
//   return svgContent;
// }

// TODO: Create a function to write logo.sv file
// DATA probably needs to be modified. We are not adding the data (responses) to the file but using it to generate the image
function writeToFile(data) {
  fs.writeFile("logo.svg", data, (err) => {
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
    let choosenShape = "";
    switch (answers.shape) {
      case "Square":
        choosenShape = new Square();
        break;
      case "Circle":
        choosenShape = new Circle();
        break;
      default:
        choosenShape = new Triangle();
        break;
    }
    console.log(svgContent);
    writeToFile("logo.svg", svgContent);
  });
}

init();
