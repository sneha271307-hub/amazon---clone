import { cart } from '../../../data/cart.js';
import { getproduct } from '../../../data/products.js';
import { getdeliveryoption } from '../../deliveryoption.js';
import { formatCurrency } from '../money.js';

export function renderpaymentsummary() {
  let productpricecents = 0;
  let shippingpricecents = 0;
  let cartquantity = 0;

  cart.forEach((cartItem) => {
    const product = getproduct(cartItem.productId);
    productpricecents += product.priceCents * cartItem.quantity;

    const deliveryoption = getdeliveryoption(cartItem.deliveryoptionId);
    shippingpricecents += deliveryoption.priceCents;

    cartquantity += cartItem.quantity;
  });

  const totalbeforetaxcents = productpricecents + shippingpricecents;
  const taxcents = totalbeforetaxcents * 0.1;
  const totalcents = totalbeforetaxcents + taxcents;

  const paymentsummaryHTML = `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (${cartquantity}):</div>
      <div class="payment-summary-money">
      $${formatCurrency(productpricecents)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${formatCurrency(shippingpricecents)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">
      $${formatCurrency(totalbeforetaxcents)}
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${formatCurrency(taxcents)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">$${formatCurrency(totalcents)}</div>
    </div>

    <button class="place-order-button button-primary">
      Place your order
    </button>
  `;

  document.querySelector('.js-payment-summary')
    .innerHTML = paymentsummaryHTML;
}