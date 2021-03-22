import React, { useState } from "react";
import Header from "./Header";
import ButtonsSection from "./ButtonsSection";
import FormContainer from "./FormContainer";
import { Wrapper } from "../styles/StyledFormComposition";

const FormComposition = () => {
  const initialState = {
    step: 0,
    data: {},
  };

  const [state, setState] = useState(initialState);

  return (
    <Wrapper>
      <Header />
      <FormContainer />
      <ButtonsSection />
    </Wrapper>
  );
};

export default FormComposition;
