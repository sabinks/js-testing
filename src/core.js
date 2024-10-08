export function getCoupons() {
  return [
    { code: 'SAVE20NOW', discount: 0.2 },
    { code: 'DISCOUNT50OFF', discount: 0.5 },
  ];
}

export function calculateDiscount(price, discountCode) {
  if (typeof price != 'number' || price <= 0) {
    return 'Invalid Price';
  }

  if (typeof discountCode !== 'string') {
    return 'Invalid discount code';
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
  if (
    typeof username !== 'string' ||
    username.length < 3 ||
    username.length > 255
  ) {
    errors.push('Invalid username');
  }
  if (typeof age !== 'number' || age < 18 || age > 100) {
    errors.push('Invalid age');
  }
  return errors.length === 0 ? 'Validation successful' : errors.join();
}

export function isPriceInRange(price, min, max) {
  return price >= min && price <= max;
}

export function isValidUsername(username) {
  if (!username) {
    return false;
  }
  const minLength = 5;
  const maxLength = 15;
  return username.length >= minLength && username.length <= maxLength;
}

export function canDrive(age, countryCode) {
  if (!countryCode) return 'Invalid Country Code';
  if (!age) return 'Invalid Age';
  const legalDriveAge = {
    US: 16,
    UK: 17,
  };
  if (!legalDriveAge[countryCode]) {
    return 'Invalid Country Code';
  }
  return age >= legalDriveAge[countryCode];
}

export function fetchData() {
  // return Promise.reject({ reason: 'Operation failed' })

  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [1, 2, 3];
      resolve(data);
    });
  });
}

export class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
}
