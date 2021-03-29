import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: nav;
  border-right: 1px solid lightgrey;
  display: grid;
  grid-template-areas:
    "steps"
    "space";
  grid-template-rows: 50% 50%;
`;
