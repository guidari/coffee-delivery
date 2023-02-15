import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { ButtonCart, ItemsAmount } from "./style";

import cartImage from "../../assets/images/cart.svg";

export interface ICartButton {
  image?: string;
  onClick?: any;
}

export default function CartButton({ image, onClick }: ICartButton) {
  const { cart } = useContext(ShoppingCartContext);

  return (
    <ButtonCart type="button" onClick={onClick}>
      {cart?.length !== 0 && (
        <ItemsAmount>
          <span>{cart?.length}</span>
        </ItemsAmount>
      )}
      <img src={cartImage} alt="carrinho" />
    </ButtonCart>
  );
}
