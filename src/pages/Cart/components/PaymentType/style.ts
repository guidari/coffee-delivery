import styled from "styled-components";

export const PaymentTypeContainer = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme["base-button"]};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border: none;
  gap: 12px;
  cursor: pointer;

  border-radius: 8px;

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;

    text-transform: uppercase;
    color: ${(props) => props.theme["base-text"]};
  }

  .active {
    background-color: ${(props) => props.theme["yellow"]};
  }
`;
