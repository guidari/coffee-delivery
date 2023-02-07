import { FormProvider, useForm, useFormContext } from "react-hook-form";
import AdressBox from "./components/AdressSectionBox";
import CartPreviewBox from "./components/CartPreviewBox";
import PaymentBox from "./components/PaymentBox";
import { BoxSection, CartContainer, Title } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const adressFormValidation = zod
  .object({
    cep: zod.string().min(1, "Informe o CEP"),
    street: zod.string().min(1, "Informe o rua"),
    homeNumber: zod.string(),
    spotTip: zod.string(),
    neighborhood: zod.string(),
    city: zod.string(),
    uf: zod.string(),
  })
  .required();

type NewCycleFormData = zod.infer<typeof adressFormValidation>;

export default function Cart() {
  const adressForm = useForm<NewCycleFormData>({
    resolver: zodResolver(adressFormValidation),
  });

  // const { handleSubmit } = useFormContext();

  console.log("errors", adressForm.formState.errors);

  function confirmOrder(values: any) {
    alert("chama");
    console.log("pedido confirmado", values);
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
