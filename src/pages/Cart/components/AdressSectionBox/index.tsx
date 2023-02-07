import InputAdress from "../../../../components/InputAdress";
import {
  AdressBoxContainer,
  Instrunctions,
  AdressForm,
  Grid2,
  Grid3,
  Grid1,
} from "./style";

export default function AdressBox() {
  return (
    <AdressBoxContainer>
      <Instrunctions>
        <img src="/src/assets/images/locationYellowLine.svg" />
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </Instrunctions>

      <AdressForm>
        <Grid1>
          <InputAdress placeholder="CEP" />
        </Grid1>
        <InputAdress placeholder="Rua" />
        <Grid2>
          <InputAdress placeholder="Número" />
          <InputAdress placeholder="Complemento" />
        </Grid2>
        <Grid3>
          <InputAdress placeholder="Bairro" />
          <InputAdress placeholder="Cidade" />
          <InputAdress placeholder="UF" />
        </Grid3>
      </AdressForm>
    </AdressBoxContainer>
  );
}
