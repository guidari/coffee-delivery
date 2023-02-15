import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import Button from "../Button";
import CartButton from "../CartButton";
import { HeaderCart, HeaderContainer, Logo } from "./style";

import LogoImage from "../../assets/images/Logo.svg";
import PurpleLocation from "../../assets/images/purpleLocation.svg";
import AlertMessage from "../AlertMessage";

export default function Header() {
  const { cart } = useContext(ShoppingCartContext);
  const [visibleAlert, setVisibleAlert] = useState(false);

  function warning() {
    setVisibleAlert(true);
    setTimeout(() => {
      setVisibleAlert(false);
    }, 3000);
  }

  return (
    <HeaderContainer>
      <NavLink to={"/"}>
        <Logo src={LogoImage} alt="Logo" />
      </NavLink>

      <HeaderCart>
        <Button title="São Paulo, SP" image={PurpleLocation} />

        {cart?.length < 1 ? (
          <CartButton onClick={warning} />
        ) : (
          <NavLink to={"/cart"}>
            <CartButton />
          </NavLink>
        )}
      </HeaderCart>
      {visibleAlert && (
        <AlertMessage
          message="Adicione um item ao carrinho"
          severity="danger"
          visibility={true}
        />
      )}
    </HeaderContainer>
  );
}
