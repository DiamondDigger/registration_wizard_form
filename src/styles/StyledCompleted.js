import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: infoSection;
  display: grid;
  grid-template-areas: "icon text";
  grid-template-columns: 15% 40%;
  margin-top: 5%;
  margin-left: 2.5%;
`;

export const IconWrapper = styled.div`
  grid-area: icon;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: green;
`;

export const ConfirmWrapper = styled.div`
  grid-area: text;
  text-align: left;
`;

export const Header = styled.p`
  font-weight: bolder;
  font-size: 1.2rem;
`;
export const Text = styled.p`
  font-size: 0.8rem;
`;
