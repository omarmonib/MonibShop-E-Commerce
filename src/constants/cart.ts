/**
 * Cart and Checkout Constants
 */

export const CART_STEPS = {
  SHOPPING_CART: 1,
  SHIPPING: 2,
  PAYMENT: 3,
} as const;

export const CART_STEP_TITLES = {
  [CART_STEPS.SHOPPING_CART]: 'Shopping Cart',
  [CART_STEPS.SHIPPING]: 'Shipping Address',
  [CART_STEPS.PAYMENT]: 'Payment Method',
} as const;

export const CHECKOUT_CONFIG = {
  SHIPPING_FEE: 10,
  DISCOUNT_PERCENT: 10,
  DECIMAL_PLACES: 2,
} as const;

export const SHIPPING_FORM_LABELS = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  address: 'Address',
  city: 'City',
} as const;

export const PAYMENT_FORM_LABELS = {
  cardHolder: 'Name on Card',
  cardNumber: 'Card Number',
  expirationDate: 'Expiration Date',
  cvv: 'CVV',
} as const;

export const PAYMENT_PLACEHOLDERS = {
  cardHolder: 'Enter your name',
  cardNumber: 'Enter your card number',
  expirationDate: 'Enter your expiration date (MM/YY)',
  cvv: 'Enter your CVV',
} as const;

export const SHIPPING_PLACEHOLDERS = {
  name: 'Enter your name',
  email: 'Enter your email',
  phone: 'Enter your phone number',
  address: 'Enter your address',
  city: 'Enter your city',
} as const;
