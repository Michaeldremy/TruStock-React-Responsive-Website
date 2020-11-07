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
  SignInText
} from "../Signin/SigninElements";

const SignUp = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">TruStock</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Create a new Account</FormH1>
              <FormLabel htmlFor="for">Username</FormLabel>
              <FormInput type="text" required />
              <FormLabel htmlFor="for">email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Sign Up</FormButton>
              <SignInText as="a" href="/signin">Already registered?</SignInText>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
