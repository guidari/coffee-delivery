import AdressBox from "./components/AdressSectionBox";
import CartPreviewBox from "./components/CartPreviewBox";
import PaymentBox from "./components/PaymentBox";
import { BoxSection, CartContainer, Title } from "./style";

export default function Cart() {
  return (
    <CartContainer>
      <div>
        <Title>Complete seu pedido</Title>
        <BoxSection>
          <AdressBox />
        </BoxSection>

        <BoxSection>
          <PaymentBox />
        </BoxSection>
      </div>
      <div>
        <Title>Cafés selecionados</Title>

        <CartPreviewBox />
      </div>
    </CartContainer>
  );
}
