import { describe, it, expect } from 'vitest';
import { calculateAverage, factorial, fizzBuzz } from '../src/intro';

describe('fizzBuzz', () => {
  it('should return FizzBuzz if divisible by 3 & 5', () => {
    const number = 15;
    const result = fizzBuzz(number);
    expect(result).toBe('FizzBuzz');
  });

  it('should return Fizz if divisible by 3', () => {
    const number = 3;
    const result = fizzBuzz(number);
    expect(result).toBe('Fizz');
  });

  it('should return Buzz if divisible by 5', () => {
    const number = 5;
    const result = fizzBuzz(number);
    expect(result).toBe('Buzz');
  });

  it('should return arg as string i not divisble by 3 or 5', () => {
    const number = 8;
    const result = fizzBuzz(number);
    expect(result).toBe('8');
  });
});

describe('calculateAverage', () => {
  it('should return NaN if given array is empty', () => {
    expect(calculateAverage([])).toBe(NaN);
  });

  it('should return that element if given array has only one element', () => {
    expect(calculateAverage([1])).toBe(1);
  });
  it('should return 1.5 if given array has 1,2 elements', () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });
  it('should return 2 if given array has 1,2,3 elements', () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});

describe('iterative factorial', () => {
  it('should return 0 if given 0', () => {
    expect(factorial(0)).toBe(1);
  });
  it('should return 1 if given 1', () => {
    expect(factorial(1)).toBe(1);
  });
  it('should return 2 if given 2', () => {
    expect(factorial(2)).toBe(2);
  });
  it('should return 6 if given 3', () => {
    expect(factorial(3)).toBe(6);
  });
  it('should return 24 if given 4', () => {
    expect(factorial(4)).toBe(24);
  });
  it('should return undefined if given number is negative', () => {
    expect(factorial(-1)).toBeUndefined();
  });
});
