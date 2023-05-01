import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 360px;
    margin: 10px auto 50px;
  }
`;

export const SignInTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
