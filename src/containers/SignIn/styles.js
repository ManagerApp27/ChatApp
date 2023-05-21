import styled from "styled-components";

export const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 400px;
  @media (max-width: 420px) {
    padding: 40px 10px;
    width: 90%;
  }
`;

export const FormTitle = styled.h1`
  margin-bottom: 20px;
`;
