import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import Button from "../Button";
import CartButton from "../CartButton";
import { HeaderCart, HeaderContainer, Logo } from "./style";

export default function Header() {
  const { cart } = useContext(ShoppingCartContext);

  function warning() {
    alert("Adicione um item ao carrinho");
  }

  return (
    <HeaderContainer>
      <NavLink to={"/"}>
        <Logo src="/src/assets/images/Logo.svg" alt="teste" />
      </NavLink>

      <HeaderCart>
        <Button title="São Paulo, SP" image="/src/assets/images/Location.svg" />

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
