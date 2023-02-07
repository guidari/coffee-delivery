import { ButtonAction } from "./style";

interface IButton {
  title?: string;
  image?: string;
}

export default function Button({ title, image }: IButton) {
  return (
    <ButtonAction onClick={() => alert("click")} disabled>
      <img src={image} alt="" />
      {title && <span>{title}</span>}
    </ButtonAction>
  );
}
