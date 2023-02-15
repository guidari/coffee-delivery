import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from ".";

describe("Header component", () => {
  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.queryByAltText("logo")).toBeInTheDocument();
    expect(screen.queryByAltText("carrinho")).toBeInTheDocument();
  });
});
