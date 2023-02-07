import styled from "styled-components";

export const ButtonCart = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  border: 0;
  padding: 0.5rem;
  border-radius: 8px;

  background-color: ${(props) => props.theme["yellow-light"]};
`;

export const ItemsAmount = styled.div`
  background-color: ${(props) => props.theme["yellow-dark"]};
  border-radius: 50%;
  position: absolute;

  padding: 0.2rem 0.5rem;

  top: -10px;
  right: -10px;

  span {
    color: ${(props) => props.theme.white};
    font-size: 12px;
  }
`;
