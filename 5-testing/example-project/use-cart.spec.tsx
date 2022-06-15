import { useCart } from "./octo-marketplace/src/hooks/use-cart";
import { fireEvent, render, screen } from "@testing-library/react";

function TestingComponent() {
  const { cartItems, onItemClick } = useCart();

  return (
    <>
      <p data-testid="items">{cartItems.length}</p>
      <button
        data-testid="click"
        onClick={() =>
          onItemClick({
            name: "testing item",
            imageUrl: "",
            price: 0.0,
          })
        }
      />
    </>
  );
}

test("happy case", () => {
  render(<TestingComponent />);

  expect(screen.getByTestId("items").textContent).toEqual("0");

  // include 1 element
  fireEvent.click(screen.getByTestId("click"));

  expect(screen.getByTestId("items").textContent).toEqual("1");

  // try to include another element
  fireEvent.click(screen.getByTestId("click"));

  expect(screen.getByTestId("items").textContent).toEqual("1");
});
