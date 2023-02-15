import { render, screen } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import InputAdress from ".";
import FakeImage from "../../assets/images/coffees/american-express.png";
import { AdressFormData } from "../../pages/Cart";

describe("InputAdress component", () => {
  it("renders correctly", () => {
    const Wrapper = (props: any) => {
      const formMethods = useForm<AdressFormData>();

      return <FormProvider {...formMethods}>{props.children}</FormProvider>;
    };

    const { debug } = render(
      <Wrapper>
        <InputAdress placeholder="titulo" registerName="titulo" type="button" />
      </Wrapper>
    );

    debug();

    expect(screen.queryByPlaceholderText("titulo")).toBeInTheDocument();
  });
});
