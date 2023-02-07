import { coffeesList } from "../../api/coffeeMock";
import CoffeeCard from "./components/CoffeeCard";
import InfoTextGrid from "./components/InfoTextGrid";
import {
  CoffeesGird,
  HomeContainer,
  InfoCoffeeGrid,
  InfoContainer,
  SubTitle,
  Title,
} from "./style";

export default function Home() {
  return (
    <HomeContainer>
      <InfoContainer>
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <SubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </SubTitle>
          <InfoCoffeeGrid>
            <InfoTextGrid
              title="Compra simples e segura"
              image="/src/assets/images/cartCircle.svg"
            />
            <InfoTextGrid
              title="Embalagem mantém o café intacto"
              image="/src/assets/images/package.svg"
            />
            <InfoTextGrid
              title="Entrega rápida e rastreada"
              image="/src/assets/images/timer.svg"
            />
            <InfoTextGrid
              title="O café chega fresquinho até você"
              image="/src/assets/images/coffeeCircle.svg"
            />
          </InfoCoffeeGrid>
        </div>
        <div>
          <img src="/src/assets/images/banner.svg" alt="" />
        </div>
      </InfoContainer>
      <h2>Nossos cafés</h2>

      <CoffeesGird>
        {coffeesList.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />;
        })}

        {/* <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard /> */}
      </CoffeesGird>
    </HomeContainer>
  );
}
