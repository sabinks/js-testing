import { describe, it, expect } from 'vitest';
import { isPriceInRange, isValidUsername } from '../src/core';

describe('isPriceInRange', () => {
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
