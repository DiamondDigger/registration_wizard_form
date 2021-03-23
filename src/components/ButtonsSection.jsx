import React from "react";
import {
  Wrapper,
  ButtonsWrapper,
  Button,
  LinkWrapper,
  Link,
} from "../styles/StyledButtonsSection";

const ButtonsSection = ({ next, back, step }) => {
  return (
    <Wrapper>
      <LinkWrapper>
        <Link>Back to login</Link>
      </LinkWrapper>
      {step === 1 ? (
        <ButtonsWrapper>
          <Button className="next" primary onClick={next}>
            NEXT
          </Button>
        </ButtonsWrapper>
      ) : (
        <ButtonsWrapper>
          <Button className="back" onClick={back}>
            BACK
          </Button>
          <Button className="next" primary onClick={next}>
            NEXT
          </Button>
        </ButtonsWrapper>
      )}
    </Wrapper>
  );
};

export default ButtonsSection;
