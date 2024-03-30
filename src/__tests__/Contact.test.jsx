import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom";

describe("Contact Us Page test cases", () => {

    // beforeAll(() => {
    //     console.log("Before All");
    // });

    // beforeEach(() => {
    //     console.log("Before Each");
    // });

    // afterAll(() => {
    //     console.log("After All");
    // });

    // afterEach(() => {
    //     console.log("After Each");
    // });


    // Can use both it or test
    // Both work the same way
    // 'it' is just another name for 'test'
    // 'it' is just an alias name for 'test' 
it("Should load contact us component", () => {
    render(<Contact/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

test("Should load submit button inside contact us component", () => {
    // Rendering
    render(<Contact/>);

    // Querying
    const buttonText = screen.getByText("Submit");
    // Assertion
    expect(buttonText).toBeInTheDocument();

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument();
});

it("Should load input name inside contact us component", () => {
    render(<Contact/>);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
});

test("Should load input message inside contact us component", () => {
    render(<Contact/>);
    const inputMessage = screen.getByPlaceholderText("message");
    expect(inputMessage).toBeInTheDocument();
});

test("Should load 2 input boxes inside contact us component", () => {
    render(<Contact/>);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(0);
});
});