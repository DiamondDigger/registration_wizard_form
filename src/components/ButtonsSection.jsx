import React from "react";
import {
  Wrapper,
  ButtonsWrapper,
  Button,
  LinkWrapper,
  Link,
} from "../styles/StyledButtonsSection";

const ButtonsSection = () => {
  return (
    <Wrapper>
      <LinkWrapper>
        <Link>Back to login</Link>
      </LinkWrapper>
      <ButtonsWrapper>
        <Button className="back">BACK</Button>
        <Button className="next" primary>
          NEXT
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default ButtonsSection;
