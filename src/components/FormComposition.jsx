import React, { useState } from "react";
import Header from "./Header";
import ButtonsSection from "./ButtonsSection";
import FormContainer from "./FormContainer";
import { Wrapper } from "../styles/StyledFormComposition";

const FormComposition = () => {
  const initialState = {
    step: 1,

    salutation: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    company: "",
    title: "",
    email: "",
    phone: "",
    fax: "",
    mobile: "",
  };

  const [state, setState] = useState(initialState);

  const next = () =>
    setState((prev) => ({
      ...prev,
      step: step + 1,
    }));
  const back = () =>
    setState((prev) => ({
      ...prev,
      step: step - 1,
    }));
  const { step } = state;

  const handleInput = (input) => (e) => {
    setState((prev) => ({
      ...prev,
      [input]: e.target.value,
    }));
    console.log("STATE", state);
  };

  return (
    <Wrapper>
      <Header step={step} />
      <FormContainer state={state} handleInput={handleInput} />
      <ButtonsSection next={next} back={back} step={step} />
    </Wrapper>
  );
};

export default FormComposition;
