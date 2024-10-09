import { vi, it, expect, describe } from 'vitest';
import {
  getDiscount,
  getPriceInCurrency,
  getShippingInfo,
  isOnline,
  login,
  signUp,
  submitOrder,
} from '../src/mocking';
import { getExchangeRate } from '../src/currency';
import { getShippingQuote } from '../src/shipping';
import { charge } from '../src/payment';
import { sendEmail } from '../src/libs/email';
import security from '../src/libs/security';

vi.mock('../src/currency');
vi.mock('../src/shipping');
vi.mock('../src/payment');
vi.mock('../src/libs/email', async (importOriginal) => {
  const originalImport = await importOriginal();
  return {
    ...originalImport,
    sendEmail: vi.fn(),
  };
});

describe('test suite', () => {
  it('test case', () => {
    const greet = vi.fn();
    greet.mockReturnValue('Hello');
    const result = greet();
    console.log(result);
  });
  it('test case', async () => {
    const greet = vi.fn();
    greet.mockResolvedValue('Hello');
    const result = await greet();
    console.log(result);
  });
  it('test case', () => {
    const greet = vi.fn();
    greet.mockImplementation((name) => `Hello ${name}`);
    greet('Saksham');
    // const result1 = greet('Saksham')
    expect(greet).toHaveBeenCalled();
    expect(greet).toHaveBeenCalledWith('Saksham');
    expect(greet).toHaveBeenCalledOnce();
  });
});

describe('sendText', () => {
  it('test case', () => {
    const sendText = vi.fn();
    sendText.mockReturnValue('ok');

    const result = sendText('message');

    expect(sendText).toHaveBeenCalledWith('message');
    expect(result).toBe('ok');
  });
});

describe('getPriceInCurrency', () => {
  it('should return price in target currency', () => {
    vi.mocked(getExchangeRate).mockReturnValue(1.5);

    const price = getPriceInCurrency(10, 'AUD');

    expect(price).toBe(15);
  });
});

describe('getShippingQuote', () => {
  it('should return shipping info if quote can be fetched', () => {
    vi.mocked(getShippingQuote).mockReturnValue({ cost: 10, estimatedDay: 2 });

    const quote = getShippingInfo('toronto');

    expect(quote).toMatch(/2 days/i);
    expect(quote).toMatch(/10/i);
    expect(quote).toMatch(/shipping cost: \$10 \(2 days\)/i);
  });
});

describe('getShippingQuote', () => {
  it('should return shipping unavailable', () => {
    vi.mocked(getShippingQuote).mockReturnValue(null);

    const quote = getShippingInfo('toronto');

    expect(quote).toMatch(/unavailable/i);
  });
});

describe('submitOrder', () => {
  let order = { totalAmount: 10 };
  let creditCard = { creditCardNumber: 'random_number', cardExpiry: '08/28' };

  it('should charge customer', async () => {
    vi.mocked(charge).mockResolvedValue({ status: 'success' });

    await submitOrder(order, creditCard);

    expect(charge).toBeCalledWith(creditCard, order.totalAmount);
  });

  it('should return success for submit order', async () => {
    vi.mocked(charge).mockResolvedValue({ status: 'success' });

    const paymentResult = await submitOrder(order, creditCard);

    expect(paymentResult).toMatchObject({ success: true });
  });

  it('should return failed for submit order', async () => {
    vi.mocked(charge).mockResolvedValue({ status: 'failed' });

    const paymentResult = await submitOrder(order, creditCard);

    expect(paymentResult).toMatchObject({
      success: false,
      error: 'payment_error',
    });
  });
});

describe('signUp', () => {
  const email = 'test@domain.com';
  it('should return false if email is not valid', async () => {
    const result = await signUp('a');
    expect(result).toBe(false);
  });

  it('should return true if email is valid', async () => {
    const result = await signUp(email);
    expect(result).toBe(true);
  });

  it('should send welcome email if email is valid', async () => {
    await signUp(email);
    expect(sendEmail).toHaveBeenCalledOnce();
    const args = vi.mocked(sendEmail).mock.calls[0];
    expect(args[0]).toBe(email);
    expect(args[1]).toMatch(/welcome/i);
  });
});

describe('login', () => {
  const email = 'test@domain.com';
  it('should email the one-time login code', async () => {
    const spy = vi.spyOn(security, 'generatedCode');
    await login(email);
    const securityCode = spy.mock.results[0].value.toString();
    expect(sendEmail).toHaveBeenCalledWith(email, securityCode);
  });
});

describe('isOnline', () => {
  it('should return false if current hour is outside opening hours', () => {
    vi.setSystemTime('2024-10-08 07:59:00');
    expect(isOnline()).toBe(false);
  });
  it('should return false if current hour is outside opening hours', () => {
    vi.setSystemTime('2024-10-08 20:01:00');
    expect(isOnline()).toBe(false);
  });
  it('should return true if current hour is withing opening hours', () => {
    vi.setSystemTime('2024-10-08 08:00:00');
    expect(isOnline()).toBe(true);
  });
  it('should return true if current hour is withing opening hours', () => {
    vi.setSystemTime('2024-10-08 19:45:00');
    expect(isOnline()).toBe(true);
  });
});

describe('getDiscount', () => {
  it('should return 0 discount if it is not christmas day', () => {
    vi.setSystemTime('2024-11-24 00:00:00');
    expect(getDiscount()).toBe(0);
  });
  it('should return 0 discount if it is not christmas day', () => {
    vi.setSystemTime('2024-11-26 00:00:00');
    expect(getDiscount()).toBe(0);
  });
  it('should return 0 discount if it is christmas day', () => {
    vi.setSystemTime('2024-11-25 01:00:00');
    expect(getDiscount()).toBe(0.2);
  });
  it('should return 0.2 discount if it is christmas day', () => {
    vi.setSystemTime('2024-11-25 23:59:59');
    expect(getDiscount()).toBe(0.2);
  });
});
