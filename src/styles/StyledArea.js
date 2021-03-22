import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: infoSection;
  display: grid;
  height: 100%;
  grid-template-areas: "checkbox commentSection";
  grid-template-columns: 1fr 1fr;
  text-align: left;
  margin: 0 55px;
`;

export const CheckboxContainer = styled.div`
  grid-area: checkbox;
  padding: 20px 30px;
`;

export const TextareaContainer = styled.div`
  grid-area: commentSection;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
`;

export const StyledP = styled.p`
  text-transform: uppercase;
  font-size: 0.7rem;
`;
