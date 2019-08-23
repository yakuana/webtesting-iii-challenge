// Test away!

// react imports 
import React from "react";
import renderer from "react-test-renderer"; 
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";  

// components 
import Controls from "./Controls.js"; 

describe("<Controls />", () => {

    it("controls default to 'unlocked' and 'open'", () => {

        // rendered Contorls component    
        const { getByTestId } = render(<Controls />);
        
        // intial render should have buttons with the text Lock Gate and Close Gate 
        expect(getByTestId("un-lock-gate-btn")).toHaveTextContent(/Lock Gate/i);
        expect(getByTestId("open-close-gate-btn")).toHaveTextContent(/Close Gate/i);
    });

    it("controls cannot be closed or opened if it is locked", () => {

        // rendered Controls with locked being true to force the gate to lock 
        const { getByTestId } = render(<Controls locked={true}/>);
        
        // the open/close button should be diabled now 
        expect(getByTestId("open-close-gate-btn")).toBeDisabled();
    }); 

    it("provide buttons to toggle the `closed` and `locked` states", () => { 

        // generates a DOM tree
        const controlTree = renderer.create(<Controls />); 

        // snapshots are a JSON representation of the DOM tree
        expect(controlTree.toJSON()).toMatchSnapshot();
    });

    it("buttons' text changes to reflect the state the door will be in if clicked", () => {
        const { getByTestId } = render(<Controls locked={true}/>);

        expect(getByTestId("un-lock-gate-btn")).toHaveTextContent("Unlock Gate")

        expect(getByTestId("open-close-gate-btn")).toHaveTextContent("Close Gate")

        expect(getByTestId("open-close-gate-btn")).toBeDisabled();

    }); 

    it("the closed toggle button is disabled if the gate is locked", () => {
        const { getByTestId } = render(<Controls locked={true}/>);

        expect(getByTestId("open-close-gate-btn")).toBeDisabled();
    }); 

    it("the locked toggle button is disabled if the gate is open", () => {
        const { getByTestId } = render(<Controls closed={false}/>);

        expect(getByTestId("un-lock-gate-btn")).toBeDisabled();
    }); 

});