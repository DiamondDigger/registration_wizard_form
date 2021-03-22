import React from "react";
import {
  Wrapper,
  CheckboxContainer,
  TextareaContainer,
  StyledP,
} from "../../styles/StyledArea";

const Areas = () => {
  return (
    <Wrapper>
      <CheckboxContainer>
        <p>* Business Areas</p>

        <div>
          <input type="checkbox" id="finance" name="finance" />
          <label htmlFor="finance">Finance</label>
        </div>
        <div>
          <input type="checkbox" id="Operations" name="Operations" />
          <label htmlFor="Operations">Operations</label>
        </div>
        <div>
          <input type="checkbox" id="it" name="it" />
          <label htmlFor="it">IT</label>
        </div>
        <div>
          <input type="checkbox" id="sales" name="sales" />
          <label htmlFor="sales">Sales</label>
        </div>
        <div>
          <input type="checkbox" id="administrative" name="administrative" />
          <label htmlFor="administrative">Administrative</label>
        </div>
        <div>
          <input type="checkbox" id="legal" name="legal" />
          <label htmlFor="legal">Legal</label>
        </div>
        <div>
          <input type="checkbox" id="marketing" name="marketing" />
          <label htmlFor="marketing">Marketing</label>
        </div>
      </CheckboxContainer>
      <TextareaContainer>
        <label htmlFor="comments">* Comments</label>
        <textarea id="comments" name="comments" rows="5" cols="33" />
        <StyledP>
          Let us know for which network you are requesting access, and any other
          comments you'd like to leave us
        </StyledP>
      </TextareaContainer>
    </Wrapper>
  );
};

export default Areas;
