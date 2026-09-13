import { cart } from '../../data/cart.js';
import { renderOrderSummary } from './checkout/order.summary.js';
import { renderpaymentsummary } from './checkout/payment.summary.js';

function updateCheckoutItemCount() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector('.js-checkout-item-count').innerHTML = cartQuantity;
}

renderOrderSummary();
renderpaymentsummary();
updateCheckoutItemCount();