import { describe, it, expect } from 'vitest';
import { isPriceInRange, isValidUsername } from '../src/core';

describe('isPriceInRange', () => {
  it.each([
    { scenario: 'price < min', price: 30, min: 40, max: 100, result: false },
    { scenario: 'price > max', price: 110, min: 40, max: 100, result: false },
    { scenario: 'price = min', price: 40, min: 40, max: 100, result: true },
    { scenario: 'price = max', price: 100, min: 40, max: 100, result: true },
    {
      scenario: 'price between min & max',
      price: 60,
      min: 40,
      max: 100,
      result: true,
    },
  ])(
    'should return $result for when $scenario',
    ({ price, min, max, result }) => {
      expect(isPriceInRange(price, min, max)).toBe(result);
    },
  );

  it('should return false if price is outside of range', () => {
    expect(isPriceInRange(30, 40, 100)).toBe(false);
    expect(isPriceInRange(150, 40, 100)).toBe(false);
  });

  it('should return true if price is equal to min or max', () => {
    expect(isPriceInRange(40, 40, 100)).toBe(true);
    expect(isPriceInRange(100, 40, 100)).toBe(true);
  });

  it('should return true if price within the range', () => {
    expect(isPriceInRange(50, 40, 100)).toBe(true);
  });
});

describe('isValidUserName', () => {
  const minLength = 5;
  const maxLength = 15;

  it('should return false if username length is shorter', () => {
    expect(isValidUsername('a'.repeat(minLength - 1))).toBe(false);
  });

  it('should return false if username length is longer', () => {
    expect(isValidUsername('a'.repeat(maxLength + 1))).toBe(false);
  });

  it('should return true if username length is at range', () => {
    expect(isValidUsername('a'.repeat(minLength))).toBe(true);
    expect(isValidUsername('a'.repeat(maxLength))).toBe(true);
  });

  it('should return true if username length is within length constraint', () => {
    expect(isValidUsername('a'.repeat(minLength + 1))).toBe(true);
    expect(isValidUsername('a'.repeat(maxLength - 1))).toBe(true);
  });

  it('should return false for invalid username', () => {
    expect(isValidUsername(null)).toBe(false);
    expect(isValidUsername(undefined)).toBe(false);
    expect(isValidUsername(1)).toBe(false);
  });
});
