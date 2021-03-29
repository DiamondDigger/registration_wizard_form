import React from "react";
import { IoIosCog } from "react-icons/io";
import {
  Wrapper,
  StepperWrapper,
  StepIcon,
  StyledHr,
} from "../../styles/Stepper";

const Stepper = () => {
  return (
    <Wrapper>
      <StepperWrapper>
        <StepIcon>
          <IoIosCog />
        </StepIcon>
        <StyledHr />
      </StepperWrapper>
      <StepperWrapper>
        <StyledHr />
        <StepIcon>
          <IoIosCog />
        </StepIcon>
        <StyledHr />
      </StepperWrapper>
      <StepperWrapper>
        <StyledHr />
        <StepIcon>
          <IoIosCog />
        </StepIcon>
      </StepperWrapper>
    </Wrapper>
  );
};

export default Stepper;
