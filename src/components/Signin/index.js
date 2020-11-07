import React from "react";

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  SignUpText
} from "./SigninElements";

const SignIn = () => {
  return (
    <div>
      <Container>
        <FormWrap>
          <Icon to="/">TruStock</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <SignUpText as="a" href="/signup">Don't have account?</SignUpText>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </div>
  );
};

export default SignIn;
