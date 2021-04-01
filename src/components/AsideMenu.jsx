import React from "react";
import { Wrapper } from "../styles/StyledAsideMenu";
import Stepper from "./Steps/Stepper";

const AsideMenu = ({ state }) => {
  return (
    <Wrapper>
      <Stepper state={state} />
    </Wrapper>
  );
};

export default AsideMenu;
