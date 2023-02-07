import { MouseEventHandler } from "react";
import { PaymentTypeContainer } from "./style";

interface IPaymentType {
  title: string;
  image: string;
  onClick: MouseEventHandler;
  selected?: any;
}

export default function PaymentType({
  title,
  image,
  onClick,
  selected,
}: IPaymentType) {
  return (
    <PaymentTypeContainer onClick={onClick}>
      <img src={image} alt={title} />
      <span>{title}</span>
    </PaymentTypeContainer>
  );
}
