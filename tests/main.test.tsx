import { calculateDiscount } from "../src/main";
import { describe, it, expect } from "vitest"

describe('calculateDiscount', () => {
  it('should return discounted price if given valid code', () => {
    const result = calculateDiscount(10, 'SAVE10');
    expect(result).toBe(9);
  });

  it('should return discounted price if given valid code', () => {
    const result = calculateDiscount(-10, 'SAVE10');
    expect(result).toMatch(/invalid price/i);
  });

  it('should return discounted price if given valid code', () => {
    const result = calculateDiscount(10, 'INVALID');
    expect(result).toBe(10);
  });

})