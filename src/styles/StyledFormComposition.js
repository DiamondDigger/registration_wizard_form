import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-areas:
    "header header header"
    "nav infoSection infoSection"
    "footer footer footer";
  grid-template-columns: 20% 1fr;
  grid-template-rows: 15% 1fr 15%;
`;
