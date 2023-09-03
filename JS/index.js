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
      const regex = /^#?([a-f0-9]{6}|[a-f0-9]{3}|colors)$/;
      return regex.test(shapeColor);
    },
  },
];
