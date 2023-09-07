class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}
class Square extends Shape {
  render() {
    return `x="0" y="0" width="300" height="200" fill="${this.color}" />`;
  }
}
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
  }
}

//<rect x="0" y="0" width="300" height="200" />; // 300x200 image px

export {
  Shape,
  Triangle,
  Square,
  Circle,
};
