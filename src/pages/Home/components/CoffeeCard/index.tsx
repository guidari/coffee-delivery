import { useContext, useReducer, useState } from "react";
import CartButton from "../../../../components/CartButton";
import { InputCount } from "../../../../components/InputCount";
import {
  ICoffeeCart,
  ShoppingCartContext,
} from "../../../../context/ShoppingCartContext";
import {
  CoffeeCardContainer,
  CoffeeImage,
  CoffeeType,
  Coffeeonatiner,
  SubTitle,
  Title,
  OrderPirceContainer,
  PriceTag,
  QuantityOrder,
  CartQuantityContainer,
  CoffeeTagsContainer,
} from "./style";

interface ICoffee {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  image: string;
  isAvaliable?: boolean;
}

interface ICoffeeItemProps {
  coffee: ICoffee;
}

// interface ICoffeeItem {
//   coffeeItem: ICoffee;
//   count: number;
// }

export default function CoffeeCard({ coffee }: ICoffeeItemProps) {
  const [count, setCount] = useState(1);

  const { addCoffeeToCart, cart } = useContext(ShoppingCartContext);

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

    setCount(newCount);
  }

  // Função responsável por remover 1 unidade do produto //
  function handleRemoveOneProductUnity() {
    const newCount = count - 1;

    if (newCount <= 0) {
      alert("Minimo de 1 produto");
      return;
    }
    setCount(newCount);
  }

  // Função responsável por repassar os dados do produto para a função //
  // na qual irá adiciona-lo ao carrinho //
  function hanldeAddToShoppingCart() {
    const coffeeItem = {
      id: coffee.id,
      name: coffee.name,
      description: coffee.description,
      image: coffee.image,
      price: coffee.price,
      tags: coffee.tags,
      quantity: count,
    };

    const cartCoffee = cart.findIndex((c) => c.id === coffee.id);

    if (cartCoffee !== -1) {
      return alert("Este item já está em seu carrinho");
    }

    addCoffeeToCart(coffeeItem as ICoffeeCart);
    setCount(1);
    alert("Item adicionado ao carrinho");
  }

  return (
    <CoffeeCardContainer>
      <Coffeeonatiner>
        <CoffeeImage src={coffee.image} alt={coffee.name} />
      </Coffeeonatiner>

      <CoffeeTagsContainer>
        {coffee.tags.map((tag) => {
          return <CoffeeType key={tag}>{tag}</CoffeeType>;
        })}
      </CoffeeTagsContainer>

      <Title>{coffee.name}</Title>
      <SubTitle>{coffee.description}</SubTitle>

      <OrderPirceContainer>
        <PriceTag>
          <span>R$ {coffee.price}0</span>
        </PriceTag>
        <CartQuantityContainer>
          <InputCount
            value={count}
            onChange={(e) => handleChangeProductUnity(Number(e.target.value))}
            onAddOneProductUnity={handleAddOneProductUnity}
            onRemoveProductUnity={handleRemoveOneProductUnity}
            min={1}
            max={99}
          />
          <button onClick={hanldeAddToShoppingCart}>
            <img src="/src/assets/images/purpleCart.svg" alt="" />
          </button>
        </CartQuantityContainer>
      </OrderPirceContainer>
    </CoffeeCardContainer>
  );
}
