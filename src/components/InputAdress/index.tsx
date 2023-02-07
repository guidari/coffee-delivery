import { InputText } from "./style";

interface IInputAdress {
  placeholder: string;
}

export default function InputAdress({ placeholder }: IInputAdress) {
  return <InputText placeholder={placeholder} />;
}
