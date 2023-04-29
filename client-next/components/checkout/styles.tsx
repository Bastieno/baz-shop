import styled from 'styled-components';
import Link from 'next/link';

export const CheckoutPageContainer = styled.div`
  width: 60%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem auto;
  padding-bottom: 3rem;

  button {
    margin-top: 3rem;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const CheckoutBodyContainer = styled.div`
  width: 100%;
  max-height: calc(100vh - 450px);
  overflow-y: auto;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 2rem;
`;

export const StyledLink = styled(Link)`
  min-width: 165px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;
