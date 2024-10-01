export function getCoupons() {
  return [
    { code: 'SAVE20NOW', discount: 0.2 },
    { code: 'DISCOUNT50OFF', discount: 0.5 },
  ]
}

export function calculateDiscount(price, discountCode) {
  if (typeof price != 'number' || price <= 0) {
    return 'Invalid Price'
  }

  if (typeof discountCode !== 'string') {
    return 'Invalid discount code'
  }

  let discount = 0;

  switch (discountCode) {
    case 'SAVE10':
      discount = 0.1;
      break;
    case 'SAVE20':
      discount = 0.2;
      break;
    default:
      discount = 0;
      break;
  }
  return price - price * discount;
}

export function validateUserInput(username, age) {
  let errors = [];
  if (typeof username !== 'string' || username.length < 3 || username.length > 255) {
    errors.push('Invalid username')
  }
  if (typeof age !== 'number' || age < 18 || age > 100) {
    errors.push('Invalid age')
  }
  return errors.length === 0 ? 'Validation successful' : errors.join()
}