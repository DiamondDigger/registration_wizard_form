import React from "react";
import AsideMenu from "./AsideMenu";
import StepSection from "./StepSection";

const FormContainer = ({ state, handleInput }) => {
  return (
    <>
      <AsideMenu />
      <StepSection state={state} handleInput={handleInput} />
    </>
  );
};

export default FormContainer;
