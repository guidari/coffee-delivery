import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import Button from "../Button";
import CartButton from "../CartButton";
import { HeaderCart, HeaderContainer, Logo } from "./style";

import LogoImage from "../../assets/images/Logo.svg";
import Location from "../../assets/images/Location.svg";

export default function Header() {
  const { cart } = useContext(ShoppingCartContext);

  function warning() {
    alert("Adicione um item ao carrinho");
  }

  return (
    <HeaderContainer>
      <NavLink to={"/"}>
        <Logo src={LogoImage} alt="teste" />
      </NavLink>

      <HeaderCart>
        <Button title="São Paulo, SP" image={Location} />

        {cart.length < 1 ? (
          <CartButton onClick={warning} />
        ) : (
          <NavLink to={"/cart"}>
            <CartButton />
          </NavLink>
        )}
      </HeaderCart>
    </HeaderContainer>
  );
}
