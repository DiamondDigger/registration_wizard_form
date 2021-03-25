import React from "react";
import {
  Wrapper,
  SectionOne,
  SectionTwo,
  InputWrapper,
  LabelWrapper,
  FieldWrapper,
  StyledLabel,
  StyledInput,
  StyledP,
} from "../../styles/StyledContactInfo";

const ContactInfo = ({ state, handleInput }) => {
  return (
    <Wrapper>
      <SectionOne>
        <InputWrapper>
          <LabelWrapper>
            <StyledLabel htmlFor="salutation">*Salutation:</StyledLabel>
          </LabelWrapper>
          <FieldWrapper>
            <StyledInput
              type="select"
              id="salutation"
              name="salutation"
              required
              onChange={handleInput("salutation")}
              value={state.name}
            />
          </FieldWrapper>
        </InputWrapper>
        <InputWrapper>
          <LabelWrapper>
            <StyledLabel htmlFor="first_name">*First Name:</StyledLabel>
          </LabelWrapper>
          <FieldWrapper>
            <StyledInput
              type="text"
              id="first_name"
              name="first_name"
              required
              onChange={handleInput("first_name")}
              value={state.name}
            />
          </FieldWrapper>
        </InputWrapper>
        <InputWrapper>
          <LabelWrapper>
            <StyledLabel htmlFor="middle_name">*Middle Name:</StyledLabel>
          </LabelWrapper>
          <FieldWrapper>
            <StyledInput
              type="text"
              id="middle_name"
              name="middle_name"
              required
              onChange={() => handleInput("middle_name")}
              value={state.name}
            />
          </FieldWrapper>
        </InputWrapper>
        <InputWrapper>
          <LabelWrapper>
            <StyledLabel htmlFor="last_name">*Last Name:</StyledLabel>
          </LabelWrapper>
          <FieldWrapper>
            <StyledInput
              type="text"
              id="last_name"
              name="last_name"
              required
              onChange={() => handleInput("last_name")}
              value={state.name}
            />
          </FieldWrapper>
        </InputWrapper>
        <InputWrapper>
          <LabelWrapper>
            <StyledLabel htmlFor="company">*Company:</StyledLabel>
          </LabelWrapper>
          <FieldWrapper>
            <StyledInput
              type="text"
              id="company"
              name="company"
              required
              onChange={() => handleInput("company")}
              value={state.name}
            />
          </FieldWrapper>
        </InputWrapper>
        <InputWrapper>
          <LabelWrapper>
            <StyledLabel htmlFor="title">*Title:</StyledLabel>
          </LabelWrapper>
          <FieldWrapper>
            <StyledInput
              type="text"
              id="title"
              name="title"
              required
              onChange={() => handleInput("title")}
              value={state.name}
            />
          </FieldWrapper>
        </InputWrapper>
      </SectionOne>
      <SectionTwo>
        <InputWrapper>
          <LabelWrapper>
            <StyledLabel htmlFor="email">*Email:</StyledLabel>
          </LabelWrapper>
          <FieldWrapper>
            <StyledInput
              type="email"
              id="email"
              name="email"
              required
              onChange={() => handleInput("email")}
              value={state.name}
            />
            <StyledP>Email will be your login</StyledP>
          </FieldWrapper>
        </InputWrapper>
        <InputWrapper>
          <LabelWrapper>
            <StyledLabel htmlFor="confirm_email">*Confirm Email:</StyledLabel>
          </LabelWrapper>
          <FieldWrapper>
            <StyledInput
              type="email"
              id="confirm_email"
              name="confirm_email"
              required
              onChange={() => handleInput("confirm_email")}
            />
          </FieldWrapper>
        </InputWrapper>
        <InputWrapper>
          <LabelWrapper>
            <StyledLabel htmlFor="phone">*Phone:</StyledLabel>
          </LabelWrapper>
          <FieldWrapper>
            <StyledInput
              type="tel"
              id="phone"
              name="phone"
              required
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              onChange={() => handleInput("phone")}
              value={state.name}
            />
          </FieldWrapper>
        </InputWrapper>
        <InputWrapper>
          <LabelWrapper>
            <StyledLabel htmlFor="fax">Fax:</StyledLabel>
          </LabelWrapper>
          <FieldWrapper>
            <StyledInput
              type="tel"
              id="fax"
              name="fax"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
              onChange={() => handleInput("fax")}
              value={state.name}
            />
          </FieldWrapper>
        </InputWrapper>
        <InputWrapper>
          <LabelWrapper>
            <StyledLabel htmlFor="mobile">Mobile:</StyledLabel>
          </LabelWrapper>
          <FieldWrapper>
            <StyledInput
              type="tel"
              id="mobile"
              name="mobile"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              onChange={() => handleInput("mobile")}
              value={state.name}
            />
          </FieldWrapper>
        </InputWrapper>
      </SectionTwo>
    </Wrapper>
  );
};

export default ContactInfo;
