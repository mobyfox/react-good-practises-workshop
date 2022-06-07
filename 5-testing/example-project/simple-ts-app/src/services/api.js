function delay(value, n) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000 * (n || 1), value);
  });
}

const items = [
  {
    name: 'Saritocat',
    imageUrl: 'https://octodex.github.com/images/saritocat.png',
    price: 0.03,
  },
  {
    name: 'Mona Lovelace',
    imageUrl: 'https://octodex.github.com/images/mona-lovelace.jpg',
    price: 0.02,
  },
  {
    name: 'Filmtocat',
    imageUrl: 'https://octodex.github.com/images/filmtocat.png',
    price: 0.01,
  },
  {
    name: 'Dunetocat',
    imageUrl: 'https://octodex.github.com/images/dunetocat.png',
    price: 0.05,
  },
  {
    name: 'Femalecodertocat',
    imageUrl: 'https://octodex.github.com/images/femalecodertocat.png',
    price: 0.01,
  },
];

export function getItems() {
  return delay(items);
}

