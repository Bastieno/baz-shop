import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    padding: 0.5rem;
    width: unset;
    flex-direction: column;
    align-items: center;

    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;
