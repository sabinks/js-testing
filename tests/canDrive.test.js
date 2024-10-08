import { describe, it, expect } from 'vitest';
import { canDrive } from '../src/core';

describe('canDrive', () => {
  it('should return false if country code is empty', () => {
    expect(canDrive(18, '')).toMatch(/invalid country code/i);
  });
  it('should return false if country code is invalid', () => {
    expect(canDrive(18, 'AUS')).toMatch(/invalid country code/i);
  });
  it('should return false if age code is invalid', () => {
    expect(canDrive(null, 'UK')).toMatch(/invalid age/i);
  });

  it('should return false for underage in the US', () => {
    expect(canDrive(15, 'US')).toBe(false);
  });
  it('should return true if age is within than legal driving age for US', () => {
    expect(canDrive(16, 'US')).toBe(true);
  });
  it('should return true if age is eligible age in US', () => {
    expect(canDrive(17, 'US')).toBe(true);
  });

  it('should return false for underage in the US', () => {
    expect(canDrive(16, 'UK')).toBe(false);
  });
  it('should return true if age is within than legal driving age for UK', () => {
    expect(canDrive(17, 'UK')).toBe(true);
  });
  it('should return true if age is eligible age in UK', () => {
    expect(canDrive(18, 'US')).toBe(true);
  });
});
describe('canDriveWithParameterizedData', () => {
  it.each([
    { age: 15, country: 'US', result: false },
    { age: 16, country: 'US', result: true },
    { age: 17, country: 'US', result: true },
    { age: 16, country: 'UK', result: false },
    { age: 17, country: 'UK', result: true },
    { age: 18, country: 'UK', result: true },
  ])(
    'should return $result if age is $age and country is $country',
    ({ age, country, result }) => {
      expect(canDrive(age, country)).toBe(result);
    },
  );
});
