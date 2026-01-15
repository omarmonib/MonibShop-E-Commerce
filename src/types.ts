import { z } from 'zod';

export type ProductType = {
  id: number | string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsType = CartItemType[];

export const shippingFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email('Invalid email address'),
  phone: z
    .string()
    .min(10, 'Phone number is too short')
    .max(15, 'Phone number is too long')
    .regex(/^[0-9]+$/, 'Phone number must contain only numbers'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, 'Card holder name is required'),
  cardNumber: z
    .string()
    .min(16, 'Card number must be 16 digits')
    .max(16, 'Card number must be 16 digits'),
  expirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Expiry date must be in MM/YY format'),
  cvv: z
    .string()
    .min(3, 'CVV must be 3 digits')
    .max(4, 'CVV must be 4 digits'),
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;

export type CartStoreStateType = {
  cart: CartItemsType;
  hasHiddenItems: boolean;
};

export type CartStoreActionsType = {
  addToCart: (product: CartItemType) => void;
  removeFromCart: (product: CartItemType) => void;
  clearCart: () => void;
};
