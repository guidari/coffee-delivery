import { useState } from "react";
import { Instrunctions } from "../AdressSectionBox/style";
import PaymentType from "../PaymentType";
import { PaymentBoxContainer, PaymentTypes } from "./style";

export default function PaymentBox() {
  const [cardSelected, setcCardSelected] = useState("credit");

  function changeCard(cardType: string) {
    setcCardSelected(cardType);
    localStorage.setItem("coffeeDelivery-cardType", cardType);
  }

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
          title="credit"
          image="/src/assets/images/creditCard.svg"
          onClick={() => changeCard("credit")}
          selected={cardSelected}
        />
        <PaymentType
          title="debit"
          image="/src/assets/images/creditCard.svg"
          onClick={() => changeCard("debit")}
          selected={cardSelected}
        />
        <PaymentType
          title="cash"
          image="/src/assets/images/creditCard.svg"
          onClick={() => changeCard("cash")}
          selected={cardSelected}
        />
      </PaymentTypes>
    </PaymentBoxContainer>
  );
}
