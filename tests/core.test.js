import { it, expect, describe } from 'vitest'
import { calculateDiscount, getCoupons } from '../src/core'
describe('getCoupons', () => {
  it('should get array of coupons', () => {
    const coupons = getCoupons()
    expect(Array.isArray(coupons)).toBeTruthy()
  })

  it('should get non empty coupons array', () => {
    const coupons = getCoupons()
    expect(coupons.length).toBeGreaterThan(0)
  })

  it('should return  an array with valid coupon codes', () => {
    const coupons = getCoupons()

    coupons.forEach(coupon => {
      expect(coupon).toHaveProperty('code')
      expect(typeof coupon.code).toBe('string')
      expect(coupon.code).toBeTruthy()
    })
  })

  it('should return an array with valid discounts', () => {
    const coupons = getCoupons()
    coupons.forEach(coupon => {
      expect(coupon).toHaveProperty('discount')
      expect(typeof coupon.discount).toBe('number')
      expect(coupon.discount).toBeGreaterThan(0)
      expect(coupon.discount).toBeLessThan(1)
    })
  })
})

describe('calculateDiscount', () => {
  it('should return discounted price if given valid code', () => {
    const result = calculateDiscount(10, 'SAVE10')
    expect(result).toBe(9)
  })

  it('should return discounted price if given valid code', () => {
    const result = calculateDiscount(10, 'SAVE20')
    expect(result).toBe(8)
  })

  it('should handle non-numeric price', () => {
    const result = calculateDiscount('10', 'SAVE10')
    expect(result).toMatch(/invalid price/i)
  })

  it('should handle negative price', () => {
    const result = calculateDiscount(-10, 'SAVE10')
    expect(result).toMatch(/invalid price/i)
  })

  it('should handle non-string discount code', () => {
    const result = calculateDiscount(10, 10)
    expect(result).toMatch(/invalid discount code/i)
  })

  it('should handle invalid discount code', () => {
    const result = calculateDiscount(10, 'INVALID')
    expect(result).toBe(10)
  })
})