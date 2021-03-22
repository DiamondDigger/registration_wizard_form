import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: infoSection;
  display: grid;
  height: 100%;
  grid-template-areas: "sectionOne sectionTwo";
  grid-template-columns: 1fr 1fr;
  text-align: left;
  margin: 0 55px;
  font-size: 0.7rem;
`;

export const SectionOne = styled.div`
  grid-area: sectionOne;
  margin-top: 20px;
`;

export const SectionTwo = styled.div`
  grid-area: sectionTwo;
  margin-top: 20px;
`;
export const InputWrapper = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-areas: "labelSection inputSection";
  grid-template-columns: 1.5fr 5fr;
  grid-gap: 10px;
`;

export const LabelWrapper = styled.div`
  grid-area: labelSection;
  text-align: right;
`;

export const FieldWrapper = styled.div`
  grid-area: inputSection;
`;

export const StyledLabel = styled.label`
  text-transform: uppercase;
  font-weight: lighter;
`;

export const StyledInput = styled.input`
  grid-area: inputSection;
`;

export const StyledP = styled.p`
  text-transform: uppercase;
  font-size: 0.5rem;
  margin: 0;
  padding: 0;
`;
