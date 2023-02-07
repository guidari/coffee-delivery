import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import { InputText } from "./style";

interface IInputAdress {
  placeholder: string;
  registerName: string;
  type?: string;
  error?: any;
}

export default function InputAdress({
  placeholder,
  registerName,
  type,
}: IInputAdress) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <InputText
        placeholder={placeholder}
        {...register(registerName)}
        type={type}
      />
      <ErrorMessage errors={errors} name="cep" />
    </>
  );
}
