import {
  LeftContainer,
  OrderInfoContainer,
  RightContainer,
  SummaryContainer,
  TextContainer,
} from "./style";

export default function OrderInfo() {
  return (
    <OrderInfoContainer>
      <LeftContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>

        <SummaryContainer>
          <TextContainer>
            <img
              src="/src/assets/images/locationDelivery.svg"
              alt="Localização"
              width="32px"
              height="32px"
            />
            <div>
              <p>
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </TextContainer>

          <TextContainer>
            <img
              src="/src/assets/images/timer.svg"
              alt="Localização"
              width="32px"
              height="32px"
            />
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </div>
          </TextContainer>

          <TextContainer>
            <img
              src="/src/assets/images/moneyDelivery.svg"
              alt="Localização"
              width="32px"
              height="32px"
            />
            <div>
              <p>Pagamento na entrega</p>
              <span>Cartão de crédito</span>
            </div>
          </TextContainer>
        </SummaryContainer>
      </LeftContainer>
      <RightContainer>
        <div></div>
        <img src="/src/assets/images/bikeDelivery.svg" alt="Localização" />
      </RightContainer>
    </OrderInfoContainer>
  );
}
