import React from "react";
import { IoIosCog } from "react-icons/io";
import {
  Wrapper,
  StepperWrapper,
  StepIcon,
  StyledHr,
} from "../../styles/Stepper";

const Stepper = ({ state }) => {
  const switchStep = ({ step }) => {
    if (!state) {
      return;
    }
    switch (step) {
      case 1: {
        return (
          <StepperWrapper>
            <StepIcon>
              <IoIosCog />
            </StepIcon>
            <StyledHr />
          </StepperWrapper>
        );
      }
      case 3: {
        return (
          <StepperWrapper>
            <StyledHr />
            <StepIcon>
              <IoIosCog />
            </StepIcon>
          </StepperWrapper>
        );
      }
      default: {
        return (
          <StepperWrapper>
            <StyledHr />
            <StepIcon>
              <IoIosCog />
            </StepIcon>
            <StyledHr />
          </StepperWrapper>
        );
      }
    }
  };
  return <Wrapper>{switchStep(state)}</Wrapper>;
};

export default Stepper;
