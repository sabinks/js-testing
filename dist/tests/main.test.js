"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../src/main");
const vitest_1 = require("vitest");
(0, vitest_1.describe)('calculateDiscount', () => {
    (0, vitest_1.it)('should return discounted price if given valid code', () => {
        const result = (0, main_1.calculateDiscount)(10, 'SAVE10');
        (0, vitest_1.expect)(result).toBe(9);
    });
    (0, vitest_1.it)('should return discounted price if given valid code', () => {
        const result = (0, main_1.calculateDiscount)(-10, 'SAVE10');
        (0, vitest_1.expect)(result).toMatch(/invalid price/i);
    });
    (0, vitest_1.it)('should return discounted price if given valid code', () => {
        const result = (0, main_1.calculateDiscount)(10, 'INVALID');
        (0, vitest_1.expect)(result).toBe(10);
    });
});
