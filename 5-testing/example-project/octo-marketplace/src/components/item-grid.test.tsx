import { fireEvent, render, screen } from "@testing-library/react";
import ItemGrid from "./item-grid";

describe("<ItemGrid />", () => {
  const items = [
    { name: "item 1", price: 1.0 },
    { name: "item 2", price: 2.0 },
  ];
  test("each item is clickable", () => {
    //given
    const onClick = jest.fn();
    //When

    render(<ItemGrid items={items} onItemClick={onClick} />);
    const item = screen.getByText("item 2");
    //and clicks
    fireEvent.click(item);
    //then
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith({ name: "item 2", price: 2.0 });
  });
});
