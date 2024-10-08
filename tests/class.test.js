import { beforeEach, describe, expect, it } from 'vitest';
import { Stack } from '../src/core';

describe('classStockTest', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  it('push should add item to stack', () => {
    stack.push(1);
    expect(stack.size()).toBe(1);
  });

  it('pop should remove and return the top item from stack', () => {
    stack.push(2);
    stack.push(3);
    stack.push(5);
    expect(stack.pop()).toBe(5);
  });

  it('peek/pop should throw an error if stack is empty', () => {
    expect(() => stack.pop()).toThrow(/empty/i);
    expect(() => stack.peek()).toThrow(/empty/i);
  });

  it('peak should return top item from stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    const peekItem = stack.peek();
    expect(peekItem).toBe(3);
    expect(stack.size()).toBe(3);
  });

  it('should return empty if stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
  });
  it('should return empty array', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.clear()).toContain([]);
  });
  it('should return false if stack is not empty', () => {
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });
  it('should return numbers of items in the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size()).toBe(3);
  });
});
