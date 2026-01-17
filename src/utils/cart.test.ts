/**
 * @jest-environment node
 */
/// <reference types="jest" />

/**
 * Test file for cart utilities
 * Run with: pnpm test
 */

import {
  calculateSubtotal,
  calculateDiscount,
  getShippingFee,
  calculateTotal,
  formatCurrency,
  formatPrice,
} from '../utils/cart';
import { CartItemType } from '../types';

// Mock data
const mockCartItems: CartItemType[] = [
  {
    id: 1,
    name: 'Test Product 1',
    shortDescription: 'Test',
    description: 'Test',
    price: 100,
    sizes: ['m'],
    colors: ['red'],
    images: { red: '/test.png' },
    quantity: 2,
    selectedSize: 'm',
    selectedColor: 'red',
  },
  {
    id: 2,
    name: 'Test Product 2',
    shortDescription: 'Test',
    description: 'Test',
    price: 50,
    sizes: ['l'],
    colors: ['blue'],
    images: { blue: '/test.png' },
    quantity: 1,
    selectedSize: 'l',
    selectedColor: 'blue',
  },
];

describe('Cart Utilities', () => {
  describe('calculateSubtotal', () => {
    test('should calculate total of (price * quantity) for all items', () => {
      // (100 * 2) + (50 * 1) = 250
      const result = calculateSubtotal(mockCartItems);
      expect(result).toBe(250);
    });

    test('should return 0 for empty cart', () => {
      const result = calculateSubtotal([]);
      expect(result).toBe(0);
    });

    test('should handle single item', () => {
      const result = calculateSubtotal([mockCartItems[0]]);
      expect(result).toBe(200); // 100 * 2
    });
  });

  describe('calculateDiscount', () => {
    test('should calculate 10% discount correctly', () => {
      const subtotal = 100;
      const result = calculateDiscount(subtotal, 10);
      expect(result).toBe(10);
    });

    test('should calculate custom discount percentage', () => {
      const subtotal = 100;
      const result = calculateDiscount(subtotal, 20);
      expect(result).toBe(20);
    });

    test('should return 0 for 0% discount', () => {
      const subtotal = 100;
      const result = calculateDiscount(subtotal, 0);
      expect(result).toBe(0);
    });

    test('should handle decimal results correctly', () => {
      const subtotal = 33.33;
      const result = calculateDiscount(subtotal, 10);
      expect(result).toBeCloseTo(3.33, 2);
    });
  });

  describe('getShippingFee', () => {
    test('should return default shipping fee of 10', () => {
      const result = getShippingFee(100);
      expect(result).toBe(10);
    });

    test('should return custom shipping fee', () => {
      const result = getShippingFee(100, 25);
      expect(result).toBe(25);
    });

    test('should return 0 for free shipping', () => {
      const result = getShippingFee(100, 0);
      expect(result).toBe(0);
    });
  });

  describe('calculateTotal', () => {
    test('should calculate total correctly with default values', () => {
      const items = mockCartItems;
      // Subtotal: 250
      // Discount (10%): 25
      // Shipping: 10
      // Total: 250 - 25 + 10 = 235
      const result = calculateTotal(items, 10, 10);
      expect(result).toBe(235);
    });

    test('should calculate total with custom discount and shipping', () => {
      const items = mockCartItems;
      // Subtotal: 250
      // Discount (20%): 50
      // Shipping: 5
      // Total: 250 - 50 + 5 = 205
      const result = calculateTotal(items, 20, 5);
      expect(result).toBe(205);
    });

    test('should calculate total for empty cart', () => {
      // Subtotal: 0
      // Discount: 0
      // Shipping: 10
      // Total: 0 - 0 + 10 = 10
      const result = calculateTotal([], 10, 10);
      expect(result).toBe(10);
    });
  });

  describe('formatCurrency', () => {
    test('should format currency with 2 decimal places', () => {
      const result = formatCurrency(100.5);
      expect(result).toBe('100.50');
    });

    test('should format integer correctly', () => {
      const result = formatCurrency(100);
      expect(result).toBe('100.00');
    });

    test('should handle custom decimal places', () => {
      const result = formatCurrency(100.123, 3);
      expect(result).toBe('100.123');
    });

    test('should handle zero', () => {
      const result = formatCurrency(0);
      expect(result).toBe('0.00');
    });
  });

  describe('formatPrice', () => {
    test('should format price with $ symbol', () => {
      const result = formatPrice(100);
      expect(result).toBe('$100.00');
    });

    test('should format decimal prices correctly', () => {
      const result = formatPrice(99.99);
      expect(result).toBe('$99.99');
    });

    test('should handle zero', () => {
      const result = formatPrice(0);
      expect(result).toBe('$0.00');
    });
  });
});

// Note: These tests use Jest syntax
// To run tests, install Jest: npm install --save-dev jest @types/jest
// Add to package.json: "test": "jest"
