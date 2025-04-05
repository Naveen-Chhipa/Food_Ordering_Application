import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("test-cases of contact us page ",()=>{

  beforeAll(()=>{
    console.log("beforeAll");
  })
  beforeEach(()=>{
    console.log("beforeEach");
  })
  
it("should load component or not", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should button is present or not", () => {
  render(<Contact />);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("should text is present or not", () => {
  render(<Contact />);

  const text = screen.getByText("Contact us");
  expect(text).toBeInTheDocument();
});

test("should text is present or not", () => {
  render(<Contact />);

  const text = screen.getByPlaceholderText("msg");
  expect(text).toBeInTheDocument();
});

test("should all input is present or not", () => {
  render(<Contact />);

  const text = screen.getAllByRole("textbox");
  //use testbox for input and All we use here because we want all the input box not just one
  expect(text.length).toBe(2);
});

})