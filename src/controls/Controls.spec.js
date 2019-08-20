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
    })
});