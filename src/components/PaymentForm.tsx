'use client';

import FormInput from '@/components/FormInput';
import { PAYMENT_FORM_LABELS, PAYMENT_PLACEHOLDERS } from '@/constants/cart';
import { PaymentFormInputs, paymentFormSchema } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const router = useRouter();

  const handlePaymentFormSubmit: SubmitHandler<PaymentFormInputs> = async (data) => {
    try {
      // TODO: Send payment data to backend
      console.log('Payment submitted:', data);
      // router.push('/order-confirmation');
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(handlePaymentFormSubmit)}>
      <FormInput
        label={PAYMENT_FORM_LABELS.cardHolder}
        type="text"
        placeholder={PAYMENT_PLACEHOLDERS.cardHolder}
        register={register('cardHolder')}
        error={errors.cardHolder}
      />

      <FormInput
        label={PAYMENT_FORM_LABELS.cardNumber}
        type="text"
        placeholder={PAYMENT_PLACEHOLDERS.cardNumber}
        register={register('cardNumber')}
        error={errors.cardNumber}
      />

      <FormInput
        label={PAYMENT_FORM_LABELS.expirationDate}
        type="text"
        placeholder={PAYMENT_PLACEHOLDERS.expirationDate}
        register={register('expirationDate')}
        error={errors.expirationDate}
      />

      <FormInput
        label={PAYMENT_FORM_LABELS.cvv}
        type="text"
        placeholder={PAYMENT_PLACEHOLDERS.cvv}
        register={register('cvv')}
        error={errors.cvv}
      />

      {/* Payment Methods */}
      <div className="flex items-center gap-3 mt-4 p-4 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-600 font-medium">Accepted payments:</p>
        <div className="flex gap-2">
          <Image src="/klarna.png" alt="Klarna" width={50} height={25} className="rounded-md" />
          <Image
            src="/cards.png"
            alt="Credit Cards"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image src="/stripe.png" alt="Stripe" width={50} height={25} className="rounded-md" />
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary mt-4">
        {isSubmitting ? 'Processing...' : 'Complete Purchase'}
        <ShoppingCart className="w-4 h-4" />
      </button>
    </form>
  );
};

export default PaymentForm;
