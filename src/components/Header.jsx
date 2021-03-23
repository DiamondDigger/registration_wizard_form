import React from "react";
import { Wrapper, HeaderInfo, StepInfo } from "../styles/StyledHeader";
import { Step } from "./StepHelper";

const Header = ({ step }) => {
  return (
    <Wrapper>
      <HeaderInfo>New User Registration</HeaderInfo>
      <StepInfo>
        STEP{step}: {Step[step]}
      </StepInfo>
    </Wrapper>
  );
};

export default Header;
