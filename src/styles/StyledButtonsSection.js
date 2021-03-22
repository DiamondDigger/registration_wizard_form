import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  grid-area: footer;
  border: 1px solid pink;
  display: grid;
  grid-template-areas: "link space buttons";
  grid-template-columns: 20% 1fr 1fr;
`;
export const LinkWrapper = styled.div`
  grid-area: link;
`;

export const Link = styled.a`
  font-size: 1rem;
  font-weight: lighter;
  color: blue;
`;

export const ButtonsWrapper = styled.div`
  grid-area: buttons;
`;

export const Button = styled.button`
  background: transparent;
  border: 2px solid lightgray;
  color: black;
  font-weight: lighter;
  margin: 0 1em;
  padding: 0.45em 1.3em;

  ${(props) =>
    props.primary &&
    css`
      border: 2px solid #0090c9;
      background: #0090c9;
      color: white;
    `};
`;
