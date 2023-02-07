import { Instrunctions } from "../AdressSectionBox/style";
import PaymentType from "../PaymentType";
import { PaymentBoxContainer, PaymentTypes } from "./style";

export default function PaymentBox() {
  return (
    <PaymentBoxContainer>
      <Instrunctions>
        <img src="/src/assets/images/money.svg" />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </Instrunctions>

      <PaymentTypes>
        <PaymentType
          title="cartão de crédito"
          image="/src/assets/images/creditCard.svg"
          onClick={() => console.log("Pagamento")}
        />
        <PaymentType
          title="cartão de débito"
          image="/src/assets/images/creditCard.svg"
          onClick={() => console.log("Pagamento")}
        />
        <PaymentType
          title="dinherio"
          image="/src/assets/images/creditCard.svg"
          onClick={() => console.log("Pagamento")}
        />
      </PaymentTypes>
    </PaymentBoxContainer>
  );
}
