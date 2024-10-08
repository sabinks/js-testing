import { getExchangeRate } from './currency';
import { isValidEmail, sendEmail } from './libs/email';
import { charge } from './payment';
import { getShippingQuote } from './shipping';
import security from './libs/security';

export function getPriceInCurrency(price, currency) {
  const rate = getExchangeRate('USD', currency);
  return price * rate;
}

export function getShippingInfo(destination) {
  const quote = getShippingQuote(destination);
  if (!quote) return 'Shipping Unavailable!';
  return `Shipping Cost: $${quote.cost} (${quote.estimatedDay} Days)`;
}

export function renderPage() {
  trackPageView('/home');

  return '<div>Content</div>';
}

export async function submitOrder(order, creditCard) {
  const paymentResult = await charge(creditCard, order.totalAmount);

  if (paymentResult.status == 'failed') {
    return { success: false, error: 'payment_error' };
  }

  return { success: true };
}

export async function signUp(email) {
  if (!isValidEmail(email)) return false;

  await sendEmail(email, 'Welcome aboard!');

  return true;
}

export async function login(email) {
  const code = security.generatedCode();

  await sendEmail(email, code.toString());
}

export function isOnline() {
  const availableHours = [8, 20];
  const [open, close] = availableHours;
  const date = new Date();
  const currentHour = date.getHours() + date.getMinutes() / 60;

  return currentHour >= open && currentHour <= close;
}

export function getDiscount() {
  const today = new Date();
  const isChristmasDay = today.getMonth() + 1 === 11 && today.getDate() === 25;

  return isChristmasDay ? 0.2 : 0;
}
