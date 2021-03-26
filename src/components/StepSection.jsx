import React from "react";
import Areas from "./Steps/Areas";
import ContactInfo from "./Steps/ContactInfo";
import Completed from "./Steps/Completed";

const StepSection = ({ state, handleInput }) => {
  switch (state.step) {
    case 1:
      return <ContactInfo state={state} handleInput={handleInput} />;
    case 2:
      return <Areas state={state} handleInput={handleInput} />;
    case 3:
      return <Completed />;
    default: {
      return <p>Some component should be here</p>;
    }
  }
};

export default StepSection;
