import { Trash } from "phosphor-react";
import { useContext, useState } from "react";
import Cart from "../..";
import { InputCount } from "../../../../components/InputCount";
import { ShoppingCartContext } from "../../../../context/ShoppingCartContext";
import { formatToBRCashString } from "../../../../utils/formatCashString";
import {
  ActionButtonsContainer,
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

  const { cart, removeCoffee, insertMoreCoffee } =
    useContext(ShoppingCartContext);

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
      alert("Qauntidade máxima de 99");
      return;
    }

    // const cartCoffee = cart.findIndex((c) => c.id === id);
    // cart[cartCoffee].quantity = newCount;

    insertMoreCoffee(id, count);
    setCount(newCount);
  }

  // Função responsável por remover 1 unidade do produto //
  function handleRemoveOneProductUnity() {
    const newCount = count - 1;

    if (newCount <= 0) {
      alert("Minimo de 1 produto");
      return;
    }

    insertMoreCoffee(id, count);
    setCount(newCount);
  }

  function removeSelectedCoffee() {
    if (cart.length === 1) {
      return alert("Deve conter ao menos um produto no carrinho");
    }
    removeCoffee(id);
  }

  return (
    <SelectedCoffeeContainer key={id}>
      <SelectedCoffeeImage>
        <img src={image} alt={name} />
      </SelectedCoffeeImage>
      <InfoContainer>
        <SelectedQuantityCoffee>{name}</SelectedQuantityCoffee>

        <ActionButtonsContainer>
          <InputCount
            value={count}
            onChange={(e) => handleChangeProductUnity(Number(e.target.value))}
            onAddOneProductUnity={handleAddOneProductUnity}
            onRemoveProductUnity={handleRemoveOneProductUnity}
            min={1}
            max={99}
          />
          <RemoveCoffee onClick={removeSelectedCoffee}>
            <Trash color="purple" />
            <span>remover</span>
          </RemoveCoffee>
        </ActionButtonsContainer>
      </InfoContainer>
      <SelectedPriceCoffee>
        {formatToBRCashString(coffeePrice)}
      </SelectedPriceCoffee>
    </SelectedCoffeeContainer>
  );
}
