import { FormProvider, useForm, useFormContext } from "react-hook-form";
import AdressBox from "./components/AdressSectionBox";
import CartPreviewBox from "./components/CartPreviewBox";
import PaymentBox from "./components/PaymentBox";
import { BoxSection, CartContainer, Title } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useNavigate } from "react-router-dom";

const adressFormValidation = zod
  .object({
    cep: zod.string().min(1, "Informe o CEP"),
    street: zod.string().min(1, "Informe o rua"),
    homeNumber: zod.string().min(1, "Informe o número"),
    spotTip: zod.string(),
    neighborhood: zod.string().min(1, "Informe o bairro"),
    city: zod.string().min(1, "Informe a cidade"),
    uf: zod.string().min(1, "Informe a UF"),
  })
  .required();

type NewCycleFormData = zod.infer<typeof adressFormValidation>;

export default function Cart() {
  const navigate = useNavigate();

  const adressForm = useForm<NewCycleFormData>({
    resolver: zodResolver(adressFormValidation),
  });

  console.log("errors", adressForm.formState.errors);

  function confirmOrder(values: NewCycleFormData) {
    localStorage.setItem("coffeeDelivery-cep", values.cep);
    localStorage.setItem("coffeeDelivery-street", values.street);
    localStorage.setItem("coffeeDelivery-homeNumber", values.homeNumber);
    localStorage.setItem("coffeeDelivery-neighborhood", values.neighborhood);
    localStorage.setItem("coffeeDelivery-city", values.city);
    localStorage.setItem("coffeeDelivery-uf", values.uf);

    navigate("/orderInfo");
  }

  return (
    <FormProvider {...adressForm}>
      <form onSubmit={adressForm.handleSubmit(confirmOrder)}>
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
      </form>
    </FormProvider>
  );
}
