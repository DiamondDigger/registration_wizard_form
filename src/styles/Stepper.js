import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: steps;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
`;

export const StepperWrapper = styled.div`
  grid: 1fr;
`;

export const StepIcon = styled.div`
  color: gold;
  font-size: 1.5rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 50px;
`;
export const StyledHr = styled.hr`
  transform: rotate(90deg);
  width: 20px;
`;
