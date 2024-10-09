"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDiscount = calculateDiscount;
function calculateDiscount(price, discountCode) {
    if (price <= 0) {
        return 'Invalid Price';
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
calculateDiscount(10, '');
