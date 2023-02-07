import styled from "styled-components";

export const InputText = styled.input`
  background-color: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-label"]};

  padding: 12px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme["base-button"]};
`;
