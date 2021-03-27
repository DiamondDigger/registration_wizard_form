import React from "react";
import { Wrapper, StepperWrapper } from "../styles/StyledAsideMenu";
import Stepper from "./Steps/Stepper";

const AsideMenu = () => {
  return (
    <Wrapper>
      <StepperWrapper>
        <Stepper />
      </StepperWrapper>
      <StepperWrapper>
        <Stepper />
      </StepperWrapper>
      <StepperWrapper>
        <Stepper />
      </StepperWrapper>
      <StepperWrapper>
        <Stepper />
      </StepperWrapper>
      <StepperWrapper>
        <Stepper />
      </StepperWrapper>
    </Wrapper>
  );
};

export default AsideMenu;
