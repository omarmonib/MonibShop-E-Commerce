'use client';

import CartItems from '@/components/CartItems';
import CartSummary from '@/components/CartSummary';
import PaymentForm from '@/components/PaymentForm';
import ShippingForm from '@/components/ShippingForm';
import StepIndicator from '@/components/StepIndicator';
import { CART_STEPS } from '@/constants/cart';
import useCartStore from '@/stores/cartStore';
import { ShippingFormInputs } from '@/types';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function CartPageContent() {
  const searchParams = useSearchParams();
  const [shippingForm, setShippingForm] = useState<ShippingFormInputs>();
  const activeStep = parseInt(searchParams.get('step') || '1');
  const { cart, removeFromCart } = useCartStore();

  const renderStepContent = () => {
    switch (activeStep) {
      case CART_STEPS.SHOPPING_CART:
        return <CartItems items={cart} onRemove={removeFromCart} />;

      case CART_STEPS.SHIPPING:
        return <ShippingForm setShippingForm={setShippingForm} />;

      case CART_STEPS.PAYMENT:
        return shippingForm ? (
          <PaymentForm />
        ) : (
          <p className="text-sm text-gray-500 py-8">Please fill shipping form to continue.</p>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12 pb-12">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>

      <StepIndicator activeStep={activeStep} />

      <div className="w-full flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-7/12 card-container flex flex-col gap-6">
          {renderStepContent()}
        </div>

        <div className="w-full lg:w-5/12">
          <CartSummary items={cart} activeStep={activeStep} />
        </div>
      </div>
    </div>
  );
}
