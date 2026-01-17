'use client';

import { calculateSubtotal, calculateDiscount, calculateTotal, formatPrice } from '@/utils/cart';
import { CHECKOUT_CONFIG } from '@/constants/cart';
import { CartItemType } from '@/types';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CartSummaryProps {
  items: CartItemType[];
  activeStep: number;
  onContinue?: () => void;
}

const CartSummary = ({ items, activeStep, onContinue }: CartSummaryProps) => {
  const router = useRouter();
  const subtotal = calculateSubtotal(items);
  const discount = calculateDiscount(subtotal, CHECKOUT_CONFIG.DISCOUNT_PERCENT);
  const shippingFee = CHECKOUT_CONFIG.SHIPPING_FEE;
  const total = calculateTotal(items, CHECKOUT_CONFIG.DISCOUNT_PERCENT, shippingFee);

  const handleContinue = () => {
    if (onContinue) {
      onContinue();
    } else {
      router.push('/cart?step=2', { scroll: false });
    }
  };

  return (
    <div className="card-container flex flex-col gap-6 h-max">
      <h2 className="font-semibold text-lg">Cart Details</h2>

      <div className="flex flex-col gap-4">
        {/* Subtotal */}
        <div className="flex justify-between text-sm">
          <p className="text-gray-500">Subtotal</p>
          <p className="font-medium">{formatPrice(subtotal)}</p>
        </div>

        {/* Discount */}
        <div className="flex justify-between text-sm">
          <p className="text-gray-500">Discount ({CHECKOUT_CONFIG.DISCOUNT_PERCENT}%)</p>
          <p className="font-medium text-green-600">-{formatPrice(discount)}</p>
        </div>

        {/* Shipping Fee */}
        <div className="flex justify-between text-sm">
          <p className="text-gray-500">Shipping Fee</p>
          <p className="font-medium">{formatPrice(shippingFee)}</p>
        </div>

        <hr className="border-gray-200" />

        {/* Total */}
        <div className="flex justify-between text-lg">
          <p className="font-semibold">Total</p>
          <p className="font-bold text-gray-800">{formatPrice(total)}</p>
        </div>
      </div>

      {/* Continue Button */}
      {activeStep === 1 && (
        <button onClick={handleContinue} className="btn-primary mt-4">
          Continue to Shipping
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default CartSummary;
