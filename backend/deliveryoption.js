export const deliveryoption = [
  {
    id: '1',
    deliverydays: 7,
    priceCents: 0
  },
  {
    id: '2',
    deliverydays: 3,
    priceCents: 499
  },
  {
    id: '3',
    deliverydays: 1,
    priceCents: 999
  }
];

export function getdeliveryoption(deliveryoptionId) {
  let matchingOption;

  deliveryoption.forEach((option) => {
    if (option.id === deliveryoptionId) {
      matchingOption = option;
    }
  });

  return matchingOption || deliveryoption[0];
}