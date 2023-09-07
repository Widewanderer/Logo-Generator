import {Shape, Triangle, Square, Circle} from "./shapes";

// test for triangle class
describe ("Triangle",()=> {
test("it should render a blue triangle",()=>{
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
})

test("it should render a red triangle", () => {
  const shape = new Triangle();
  shape.setColor("red");
  expect(shape.render()).toEqual(
    '<polygon points="150, 18 244, 182 56, 182" fill="red" />'
  );
});
})
// test for Square class
describe("Square", () => {
  test("it should render a blue square", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      'x="0" y="0" width="300" height="200" fill="blue" />'
    );
  });
});
// test for Circle class 
describe("Circle", () => {
  test("it should render a green Circle", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="50" fill="green" />'
    );
  });
});
