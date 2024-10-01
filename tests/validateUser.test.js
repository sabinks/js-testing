import { expect, describe, it } from "vitest"
import { validateUserInput } from "../src/core"

describe('validateUserInput', () => {
  it('should return success if given valid input', () => {
    const result = validateUserInput('sabin', 35)
    expect(result).toMatch(/success/i)
  })

  it('should return error if given username is not string', () => {
    const result = validateUserInput(1, 35)
    expect(result).toMatch(/invalid username/i)
  })

  it('should return error if given username has less than equal to 3 chars', () => {
    const result = validateUserInput('sa', 35)
    expect(result).toMatch(/invalid username/i)
  })

  it('should return error if given username has more than equal to 255 chars', () => {
    const result = validateUserInput('A'.repeat(256), 35)
    expect(result).toMatch(/invalid username/i)
  })

  it('should return error if given age is not a number', () => {
    const result = validateUserInput('sabin', '18')
    expect(result).toMatch(/invalid age/i)
  })

  it('should return error if given age is less than 18', () => {
    const result = validateUserInput('sabin', 17)
    expect(result).toMatch(/invalid age/i)
  })

  it('should return error if given age is greater than 100', () => {
    const result = validateUserInput('sabin', 101)
    expect(result).toMatch(/invalid age/i)
  })

  it('should return error if given usename and age is invalid', () => {
    const result = validateUserInput('sa', '101')
    expect(result).toMatch(/invalid age/i)
    expect(result).toMatch(/invalid username/i)
  })
})