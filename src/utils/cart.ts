import { CartItemType } from '@/types';

/**
 * Calculate subtotal from cart items
 */
export const calculateSubtotal = (items: CartItemType[]): number => {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

/**
 * Calculate discount amount
 */
export const calculateDiscount = (subtotal: number, discountPercent: number = 10): number => {
  return Math.round(((subtotal * discountPercent) / 100) * 100) / 100;
};

/**
 * Calculate shipping fee (can be dynamic based on conditions)
 */
export const getShippingFee = (subtotal: number, shippingFee: number = 10): number => {
  return shippingFee;
};

/**
 * Calculate total amount
 */
export const calculateTotal = (
  items: CartItemType[],
  discountPercent: number = 10,
  shippingFee: number = 10
): number => {
  const subtotal = calculateSubtotal(items);
  const discount = calculateDiscount(subtotal, discountPercent);
  return subtotal - discount + shippingFee;
};

/**
 * Format currency
 */
export const formatCurrency = (amount: number, decimals: number = 2): string => {
  return amount.toFixed(decimals);
};

/**
 * Format price with $ symbol
 */
export const formatPrice = (amount: number): string => {
  return `$${formatCurrency(amount)}`;
};
