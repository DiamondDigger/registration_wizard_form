import React from "react";
import {
  Wrapper,
  Header,
  Text,
  ConfirmWrapper,
  IconWrapper,
} from "../../styles/StyledCompleted";
import { AiOutlineFileDone } from "react-icons/ai";

const Completed = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <AiOutlineFileDone />
      </IconWrapper>
      <ConfirmWrapper>
        <Header>Thank you for registering!</Header>
        <Text>
          A registration confirmation email was sent to the email addres
          provided. Your reqistration will be sent for approval and activation
          to the Administrator.
          <b> You will receive an email when your account is ready to use.</b>
        </Text>
      </ConfirmWrapper>
    </Wrapper>
  );
};

export default Completed;
