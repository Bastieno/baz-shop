import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;

  @media screen and (max-width: 800px) {
    margin: 10px auto 50px;
  }
`;

export const SignUpTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
