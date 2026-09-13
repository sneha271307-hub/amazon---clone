import { addToCart, cart } from '../../data/cart.js';

describe('test suite: addToCart', () => {

  it('adds an existing product to the cart', () => {

    cart.length = 0;

    cart.push({
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 1,
      deliveryoptionId: '1'
    });

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

    expect(cart[0].quantity).toEqual(2);
  });

});