import styled from "styled-components";

export const SelectedCoffeeContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  align-items: flex-start;
  gap: 20px;
  /* background-color: red; */
  padding: 24px 0;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
`;

export const SelectedCoffeeImage = styled.div`
  img {
    width: 64px;
    height: 64px;
  }
`;

export const SelectedQuantityCoffee = styled.div``;

export const SelectedPriceCoffee = styled.div``;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  max-height: 32px;
`;

export const RemoveCoffee = styled.button`
  background-color: ${(props) => props.theme["base-button"]};
  text-transform: uppercase;

  display: flex;
  gap: 4px;
  padding: 10px 8px;

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;

    color: ${(props) => props.theme["base-text"]};
  }

  &:hover {
    opacity: 0.8;
  }
`;
