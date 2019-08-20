// Test away

// react imports 
import React from "react";
import renderer from "react-test-renderer"; 
import { render, fireEvent } from "@testing-library/react";

// components 
import DashBoard from "./Dashboard.js"; 

describe("<DashBoard />", () => {
    it("shows the controls and display", () => { 

        // generates a DOM tree
        const dashTree = renderer.create(<DashBoard />); 

        // snapshots are a JSON representation of the DOM tree
        expect(dashTree.toJSON()).toMatchSnapshot();
    })
})