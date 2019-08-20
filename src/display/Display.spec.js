// Test away!

// react imports 
import React from "react";
import renderer from "react-test-renderer"; 
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";  

// components 
import Display from "./Display.js"; 

describe("<Display />", () => {

    it("shows the controls and display", () => { 
        // generates a DOM tree
        const displayTree = renderer.create(<Display />); 

        // snapshots are a JSON representation of the DOM tree
        expect(displayTree.toJSON()).toMatchSnapshot();
    }); 

    it("displays 'Closed' if the `closed` prop is `true`", () => {
        const { getByTestId } = render(<Display closed={true} />)

        expect(getByTestId("display-opn-close")).toHaveTextContent(/Closed/i)
    });

    it("displays 'Open' if `closed` prop is false", () => {
        const { getByTestId } = render(<Display closed={false} />)

        expect(getByTestId("display-opn-close")).toHaveTextContent(/Open/i)
    });

    it("displays 'Locked' if the `locked` prop is `true`", () => {
        const { getByTestId } = render(<Display locked={true} />)

        expect(getByTestId("display-un-lock")).toHaveTextContent(/Locked/i)
    });

    it("displays 'Unlocked' if `locked` prop is false", () => {
        const { getByTestId } = render(<Display locked={false} />)

        expect(getByTestId("display-un-lock")).toHaveTextContent(/Unlocked/i)
    });

    it("when `closed` use the `red-led` class", () => {
        const { getByTestId } = render(<Display closed={true} />)

        expect(getByTestId("display-opn-close")).toHaveClass("red-led")
    });

    it("when `locked` use the `red-led` class", () => {
        const { getByTestId } = render(<Display locked={true} />)

        expect(getByTestId("display-un-lock")).toHaveClass("red-led")
    });

    it("when `open` use the `green-led` class", () => {
        const { getByTestId } = render(<Display closed={false} />)

        expect(getByTestId("display-opn-close")).toHaveClass("green-led")
    });

    it("when `unlocked` use the `green-led` class", () => {
        const { getByTestId } = render(<Display locked={false} />)

        expect(getByTestId("display-un-lock")).toHaveClass("green-led")
    });


})