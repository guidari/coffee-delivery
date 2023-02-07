import styled from "styled-components";

export const HomeContainer = styled.div``;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 50px;

  margin: 100px auto;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    margin: 50px auto;
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 130%;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  color: ${(props) => props.theme["base-title"]};

  margin-bottom: 16px;
`;

export const SubTitle = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;

  font-stretch: 100;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  color: ${(props) => props.theme["base-subtitle"]};

  margin-bottom: 66px;
`;

export const InfoCoffeeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const CoffeesGird = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  gap: 20px;
  margin: 50px 0;
`;
