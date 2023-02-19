import { Trash } from "phosphor-react";
import { useContext, useState } from "react";
import Cart from "../..";
import AlertMessage from "../../../../components/AlertMessage";
import { InputCount } from "../../../../components/InputCount";
import { ShoppingCartContext } from "../../../../context/ShoppingCartContext";
import { formatToBRCashString } from "../../../../utils/formatCashString";
import {
  ActionButtonsContainer,
  ContainerNamePrice,
  InfoContainer,
  RemoveCoffee,
  SelectedCoffeeContainer,
  SelectedCoffeeImage,
  SelectedPriceCoffee,
  SelectedQuantityCoffee,
} from "./style";

interface ISelectedCoffee {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export default function SelectedCoffee({
  id,
  name,
  image,
  price,
  quantity,
}: ISelectedCoffee) {
  const [count, setCount] = useState(quantity);
  const [messageAlert, setMessageAlert] = useState("");
  const [visibleAlert, setVisibleAlert] = useState(false);

  const { removeCoffee, insertMoreCoffee } = useContext(ShoppingCartContext);

  const coffeePrice = price * count;

  function handleChangeProductUnity(countOfProduct: number) {
    const newCount = countOfProduct;

    if (newCount <= 0 || newCount >= 100) {
      return;
    }

    setCount(newCount);
  }

  function handleAddOneProductUnity() {
    const newCount = count + 1;

    if (newCount >= 100) {
      setMessageAlert("Qauntidade máxima de 99");
      setVisibleAlert(true);
      setTimeout(() => {
        setVisibleAlert(false);
      }, 3000);
      return;
    }

    insertMoreCoffee(id, count);
    setCount(newCount);
  }

  // Função responsável por remover 1 unidade do produto //
  function handleRemoveOneProductUnity() {
    const newCount = count - 1;

    if (newCount <= 0) {
      setMessageAlert("Minimo de 1 produto");
      setVisibleAlert(true);
      setTimeout(() => {
        setVisibleAlert(false);
      }, 3000);
      return;
    }

    insertMoreCoffee(id, count);
    setCount(newCount);
  }

  function removeSelectedCoffee() {
    removeCoffee(id);
  }

  return (
    <SelectedCoffeeContainer key={id}>
      <SelectedCoffeeImage>
        <img src={image} alt={name} />
      </SelectedCoffeeImage>
      <InfoContainer>
        <ContainerNamePrice>
          <SelectedQuantityCoffee>{name}</SelectedQuantityCoffee>
          <SelectedPriceCoffee>
            R$ {formatToBRCashString(coffeePrice)}
          </SelectedPriceCoffee>
        </ContainerNamePrice>

        <ActionButtonsContainer>
          <InputCount
            value={count}
            onChange={(e) => handleChangeProductUnity(Number(e.target.value))}
            onAddOneProductUnity={handleAddOneProductUnity}
            onRemoveProductUnity={handleRemoveOneProductUnity}
            min={1}
            max={99}
          />
          <RemoveCoffee
            onClick={removeSelectedCoffee}
            data-testid="removeCoffee"
          >
            <Trash color="purple" />
            <span>remover</span>
          </RemoveCoffee>
        </ActionButtonsContainer>
      </InfoContainer>

      {visibleAlert && (
        <AlertMessage
          message={messageAlert}
          severity="danger"
          visibility={true}
        />
      )}
    </SelectedCoffeeContainer>
  );
}
