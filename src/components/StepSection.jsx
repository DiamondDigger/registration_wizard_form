import React from "react";
import Areas from "./Steps/Areas";
import ContactInfo from "./Steps/ContactInfo";
import Completed from "./Steps/Completed";

const StepSection = ({ state, handleInput }) => {
  return (
    <div>
      {/* <Areas /> */}
      <ContactInfo state={state} handleIput={handleInput} />
      {/* <Completed /> */}
    </div>
  );
};

export default StepSection;
