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

import CartCircle from "../../assets/images/cartCircle.svg";
import Package from "../../assets/images/package.svg";
import Timer from "../../assets/images/timer.svg";
import CoffeeCircle from "../../assets/images/coffeeCircle.svg";
import Banner from "../../assets/images/banner.svg";

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
            <InfoTextGrid title="Compra simples e segura" image={CartCircle} />
            <InfoTextGrid
              title="Embalagem mantém o café intacto"
              image={Package}
            />
            <InfoTextGrid title="Entrega rápida e rastreada" image={Timer} />
            <InfoTextGrid
              title="O café chega fresquinho até você"
              image={CoffeeCircle}
            />
          </InfoCoffeeGrid>
        </div>
        <div>
          <img src={Banner} alt="" />
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
