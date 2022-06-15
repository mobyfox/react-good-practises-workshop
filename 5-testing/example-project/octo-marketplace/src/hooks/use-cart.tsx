import { useState } from "react";

export function useCart() {
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const onItemClick = (item: Item) => {
    setCartItems((items) => {
      if (items.some((i) => i.name === item.name)) {
        return items;
      }
      return [item, ...items];
    });
  };

  return {
    cartItems,
    onItemClick,
  };
}
