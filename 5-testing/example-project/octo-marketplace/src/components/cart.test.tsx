import { render, screen } from "@testing-library/react";
import Cart from "./cart";

describe("<Cart />", () => {
  it("it renders a div", () => {
    //given
    const items = [1, 2, 3];
    //when
    render(<Cart items={items} />);
    //then
    const el = screen.findByTestId("cart");
    expect(el).toBeDefined();
  });

  it("it renders a banner", () => {
    //given
    const items = [1, 2, 3];
    //when
    render(<Cart items={items} />);
    //then
    const el = screen.getByRole("banner");
    expect(el).toBeDefined();
  });

  afterAll(() => {
    //Reseting things we need to reset
  });
});
