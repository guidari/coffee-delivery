import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { ButtonCart, ItemsAmount } from "./style";

interface ICartButton {
  image?: string;
  onClick?: any;
}

export default function CartButton({ image, onClick }: ICartButton) {
  const { cart } = useContext(ShoppingCartContext);

  return (
    <ButtonCart type="button" onClick={onClick}>
      {cart.length !== 0 && (
        <ItemsAmount>
          <span>{cart.length}</span>
        </ItemsAmount>
      )}
      <img src="/src/assets/images/cart.svg" alt="" />
    </ButtonCart>
  );
}
